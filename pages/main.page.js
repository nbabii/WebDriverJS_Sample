import { By } from "selenium-webdriver";
import BasePage from "./base.page";
import LoginPage from "./login.page";

//Locators
const signInBtn = By.xpath("//a[@href='/login']");

export default class MainPage extends BasePage {

    constructor(driver){

        super(driver)                

    }

    open(){
        
        this.driver.get("https://github.com")
        .then(() => console.log("Main Page Opened"));

        return this;
    }

    navigateToSignIn(){
        
      this.driver.findElement(signInBtn).click()
      .then(() => console.log("Sign In Page Opened")); 

      return new LoginPage(this.driver);
    }

    isPageAvailable(){

        console.log("Main Page isPageAvailable");

    }

}

//export { MainPage };