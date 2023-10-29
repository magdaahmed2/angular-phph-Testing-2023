import { MessageService } from "src/app/services/message/message.service";
import { MessagesComponentForLab } from "./messages.lab.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponent } from "src/app/messages/messages.component";

describe("2-message component integration testing:", () => {
    let mockMessageService: jasmine.SpyObj<MessageService>;
    it("expect comp. created successfully", () => {
        
        const component = new MessagesComponentForLab();
        expect(component).toBeTruthy();
    });

    it("expect component template to be empty", () => {
        
        const fixture = TestBed.createComponent( MessagesComponentForLab); 
        const template = fixture.nativeElement;
        expect(template.innerHTML).toBe('');
    });

    it("then expect div.msg to have the messages after setting it", () => {
        
        const fixture = TestBed.createComponent( MessagesComponentForLab); 
        const component = fixture.componentInstance;
        component.messageService.messages = ['Message 1', 'Message 2']; 
        fixture.detectChanges(); 
        const template = fixture.nativeElement;
        expect(template.querySelector('div.msg').textContent).toContain('Message 1');
        expect(template.querySelector('div.msg').textContent).toContain('Message 2');
    });
});
