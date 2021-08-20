import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GreeterComponent } from './greeter.component';
import { GreeterService } from './greeter.service';

fdescribe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;
  var debugElement : DebugElement;
  let fakeGreeterService : jasmine.SpyObj<GreeterService> = jasmine.createSpyObj('GreeterService', ['greet']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GreeterComponent 
      ],
      providers : [
        {provide : GreeterService, useValue : fakeGreeterService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the default greet message', () => {
    expect(component.greetMessage).toBe('[Default greet message]');
  });

  it('should display the default greet message', () => {
    const expectedMessage : string = '[Default greet message]'
    const actualMessage = debugElement.query(By.css('div:nth-child(6)')).nativeElement.innerText;
    expect(actualMessage).toEqual(expectedMessage);
  });

  it('should display the message when greeted', () => {
    var expectedResult = 'A test greet message'

    //setting the mock for the greet service
    fakeGreeterService.greet.and.returnValue(expectedResult);

    //setting value in the textbox
    const txtUserName = debugElement.query(By.css('input[type="text"]')).nativeElement
    txtUserName.value = 'Magesh';
    txtUserName.dispatchEvent(new Event('input'));
    
    //locating the button and triggering the click event
    const btnGreet = debugElement.query(By.css('input[type="button"][value="Greet"]')).nativeElement;
    btnGreet.dispatchEvent(new Event("click"))

    //force change detection so that the component state can be reflected in the UI
    fixture.detectChanges();

    //get the desired DOM node for assertion
    const actualMessage = debugElement.query(By.css('div:nth-child(6)')).nativeElement.innerText;
    //const actualMessage = component.greetMessage;

    //perform the assertion
    expect(fakeGreeterService.greet).toHaveBeenCalled();
    expect(fakeGreeterService.greet).toHaveBeenCalledWith('Magesh');
    expect(actualMessage).toBe(expectedResult);
  });
});
