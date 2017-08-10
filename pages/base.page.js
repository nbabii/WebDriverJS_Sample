
export default class BasePage {

    constructor(driver){

        this.driver = driver;
        
        if (new.target === BasePage) {
            throw new TypeError("Cannot construct Abstract BasePage instances directly");
        }
        
        if (this.isPageAvailable === undefined) {
            throw new TypeError(this.constructor.name + " Must override method isPageAvailable()");
        }        

    }

}

//export { BasePage };