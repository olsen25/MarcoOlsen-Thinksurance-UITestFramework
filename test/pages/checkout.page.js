import Page from './page';

let taxes
let finaltotal
var finaltotalsent
var totalSent

class CheckoutPage extends Page {
    get headerPageName() {return $('#header_container > div.header_secondary_container > span')}
    get firstNameField() {return $('#first-name')}
    get lastNameField() {return $('#last-name')}
    get zipCodeField() {return $('#postal-code')}
    get continueBth() {return $('#continue')}
    get finishBtn() {return $('#finish')}
    get finalHeaderName() {return $('#header_container > div.header_secondary_container > span')}
    get completeImage() {return $('#checkout_complete_container > img')}
    get summaryTotal() {return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label')}
    get taxesamont() {return $('#checkout_summary_container > div > div.summary_info > div.summary_tax_label')}


    open() {
        super.open();
        return this;
      }

    getHeaderName(){
        return this.headerPageName.getText();
    }

    setFirstName(firstName){
        this.firstNameField.setValue(firstName)
        return this;
    }

    setLastName(lastName){
        this.lastNameField.setValue(lastName)
        return this;
    }

    setZipCode(zipCode){
        this.zipCodeField.setValue(zipCode)
        return this;
    }

    nextPage(){
        this.continueBth.click()
        return this;
    }

    finishPage(){
        this.finishBtn.click()
        return this;
    }

    getFinalHeaderName(){
        return this.finalHeaderName.getText()
    }

    getCompleteImage(){
        return this.completeImage.isDisplayed();
    }

    compareFinalTotalPrices(totalPriceWithoutTax){
        finaltotal = this.summaryTotal.getText()
        console.log(finaltotal)
        finaltotal = finaltotal.replace('Total: ', '')
        console.log(finaltotal)
        taxes = this.taxesamont.getText()
        console.log(taxes)
        taxes = taxes.replace('Tax: ', '')
        console.log(taxes)
        console.log(totalPriceWithoutTax)
        finaltotalsent = "$" + (parseFloat(totalPriceWithoutTax.substring(1)) + parseFloat(taxes.substring(1)))
        console.log(finaltotalsent)
        if(finaltotalsent == finaltotal){
            return true;
        }
        else{
            return false;
        }
    }

}

export default new CheckoutPage();
