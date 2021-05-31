import Page from './page';


class CartPage extends Page {
    get headerPageName() {return $('#header_container > div.header_secondary_container > span')}
    get checkoutBtn() {return $('#checkout')}

    open() {
        super.open();
        return this;
    }

    getHeaderName(){
        return this.headerPageName.getText();
    }

    goCheckout(){
        this.checkoutBtn.click();
        return this;
    }
  
}

export default new CartPage();
