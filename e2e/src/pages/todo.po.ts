import { browser } from 'protractor';

export class TodoPage {
    navigateTo() {
        return browser.get("/login");
    }
}