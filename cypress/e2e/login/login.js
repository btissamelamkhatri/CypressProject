import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Login from "../pageObjects/login";
Given("login", ()=>{
  const ln = new Login();
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  ln.setUserName("Admin")
  ln.setPassword("admin123");
  ln.clickSubmit();
  ln.verifyLogin();
})
 