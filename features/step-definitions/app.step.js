import { Given, When, Then } from "@wdio/cucumber-framework";
import App from "../pageobjects/app.page"

Given(/^I am on the home page$/, async () => {
    await App.openHomepage()
    
})