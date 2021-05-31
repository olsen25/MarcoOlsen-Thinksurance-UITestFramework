//pages
import loginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import CheckoutPage from '../pages/checkout.page'
//data
import loginData from '../data/login.data'
import inventoryData from '../data/inventory.data'
import cartData from '../data/cart.data'
import checkoutData from '../data/checkout.data'

var totalPriceWithoutTax 

describe('Standard User Flow', function () {
    it('Load Login Page', function() {
        loginPage
            .open()
            .verifyPage(loginData.pageTitle);
            utilities.takeScreenshot('Load Page');
      });
    
      it('Login Process', function() {
        loginPage
            .loginProcess(loginData.userNameStandar,  loginData.password)
        expect(loginPage.verifyLogin()).toEqual(true);
        expect(InventoryPage.getHeaderName()).toEqual(inventoryData.pageTitle)
            utilities.takeScreenshot('Product Page');
      });

      it('Adding Products to Cart',function() {
        InventoryPage
            .getFirstProductInfo()
            .getSecondProductInfo()
            .getThirdProductInfo()
            .goCart()
        expect(CartPage.getHeaderName()).toEqual(cartData.pageTitle);
             utilities.takeScreenshot('Cart Page');
        expect(InventoryPage.verifyCart()).toEqual(true);
            utilities.takeScreenshot('Products Added');
        CartPage.goCheckout();    
        totalPriceWithoutTax = InventoryPage.totalPrice();
        console.log(totalPriceWithoutTax)
      })

      it('Checkout Process', function() {
        expect(CheckoutPage.getHeaderName()).toEqual(checkoutData.pageTitle)
        utilities.takeScreenshot('Checkout Page');
        CheckoutPage
            .setFirstName(checkoutData.firstName)
            .setLastName(checkoutData.lastName)
            .setZipCode(checkoutData.zipCode)
            utilities.takeScreenshot('Checkout Info')
        CheckoutPage
            .nextPage();
            utilities.takeScreenshot('Checkout Overview')
        console.log(totalPriceWithoutTax)
        expect(CheckoutPage.compareFinalTotalPrices(totalPriceWithoutTax)).toEqual(true)
        CheckoutPage
            .finishPage();
        expect(CheckoutPage.getFinalHeaderName()).toEqual(checkoutData.completePageMsg)
        CheckoutPage.getCompleteImage();
            utilities.takeScreenshot('Checkout Successful')
      })  

})