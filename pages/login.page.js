import { By } from "selenium-webdriver";
import BasePage from "./base.page";

//Locators
const emailInput = By.xpath("//*[@id='login_field']");
const passwordInput= By.xpath("//*[@id='password']");
const signInBtn = By.xpath("//*[@name='commit']");
const errorMsg = By.xpath("//div[contains(@class, 'flash-full')]/div");

export default class LoginPage extends BasePage {

    constructor(driver){
        super(driver)
    }

    open(){
        
        this.driver.get("https://github.com/login")
            .then(() => console.log("Login Page Opened"));

        return this;
    }

    loginAsWrongUser(username, password) {

        this.driver.findElement(emailInput).sendKeys(username)
            .then(() => console.log(`\"${username}\" Entered to username fileld`));
        this.driver.findElement(passwordInput).sendKeys(password)
            .then(() => console.log(`\"${password}\" Entered to password fileld`));
        this.driver.findElement(signInBtn).click()
            .then(() => console.log("Sign In button clicked"));                                    
        return this.driver.findElement(errorMsg).getText();

    }

    isPageAvailable(){

        console.log("LoginPage isPageAvailable");

    }
}

//export { LoginPage };