import MainPage from "../pages/main.page";
import { ScreenUtils } from "../utils/screenshooter";
//let mainPage = require('../pages/main_page.js');
import webdriver from "selenium-webdriver";
//let webdriver = require('selenium-webdriver');

//var Jasmine = require('jasmine');
//var jasmine = new Jasmine();
//jasmine.loadConfigFile('spec/support/jasmine.json');

describe('\nSelenium demo - Suite 1;', function(){
    
    let driver;
    let tempScreenshot;
    let specDescription, specFullName;

    (() => {
        jasmine.getEnv().addReporter({
        specStarted: result => {
            specDescription = result.description;
            specFullName = result.fullName;
        },
        specDone: result => {
            if(result.status === "failed") {                
                ScreenUtils.saveScreenshotAfterFail(tempScreenshot, result.description);                                            
            } else {tempScreenshot = undefined}                                  
        }
        });
    })();

    beforeEach(() => {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
        console.log(`${specFullName} - Started`);
        driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
        driver.manage().window().maximize()
        .then(() => console.log("Browser started and maximized")); 

    });
    
    afterEach(closed => {
        
        driver.takeScreenshot().then(png => tempScreenshot = png);
        driver.quit().then(closed);  

    });

    it('Test login for short password with error message check', () => { 

        new MainPage(driver).open()
        .navigateToSignIn()
        .loginAsWrongUser("test", "test")
        .then(errorMsg => 
             expect(errorMsg).toBe("We can't let you log in with that password! We have seen a lot of hackers guess it when trying to steal accounts so we are preventing it from being used for your account. Please reset your password. If you have problems, please contact support@github.com")
        );
        
    });

    it('Test login for wrong password with error message check', () => { 

        new MainPage(driver).open()
        .navigateToSignIn()
        .loginAsWrongUser("test123123", "test123123")
        .then(errorMsg => 
             expect(errorMsg).toBe("Incorrect username or password.")
        );
        
    });

    //it('Done', () => {});

});