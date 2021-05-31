import Page from './page';

let firstArticleName
var firstArticlePrice
let secondArticleName
var secondArticlePrice
let thirdArticleName
var thirdArticlePrice
var totalP

class InventoryPage extends Page {
    get headerPageName() {return $('#header_container > div.header_secondary_container > span')}
    get cartBtn() {return $('#shopping_cart_container > a')}
    get backBtn() {return $('#back-to-products')}
    get addToCartBtn() {return $("//div[@class='inventory_details_desc_container']/button")}
    /*Although the articles have static IDs, 
    I assumed a scenario in which I could dynamically search the articles and not depend on a static element, 
    since if that article is deleted it will give an error. There are two ways to do it, 
    1. with a dynamic javascript function that will loop through the container and extract the data or 
    2. using a well structured xpath that dynamically extract the values */
    get firstArticle() {return $("//div[@class='inventory_list']/div[@class='inventory_item'][1]/div[@class='inventory_item_description']/div/a")}
    get secondArticle() {return $("//div[@class='inventory_list']/div[@class='inventory_item'][2]/div[@class='inventory_item_description']/div/a")}
    get thirdArticle() {return $("//div[@class='inventory_list']/div[@class='inventory_item'][3]/div[@class='inventory_item_description']/div/a")}
    get articleName() {return $('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size')}
    get articlePrice() {return $('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price')}

    open() {
        super.open();
        return this;
      }

    getHeaderName(){
        return this.headerPageName.getText();
    }

    getFirstProductInfo(){
      this.firstArticle.click()
      firstArticleName = this.articleName.getText();
      console.log(firstArticleName)
      firstArticlePrice = this.articlePrice.getText();
      console.log(firstArticlePrice)
      this.addToCartBtn.click();
      this.backBtn.click();
      return this; 
    }

    getSecondProductInfo(){
      this.secondArticle.click()
      secondArticleName = this.articleName.getText();
      console.log(secondArticleName)
      secondArticlePrice = this.articlePrice.getText();
      console.log(secondArticlePrice)
      this.addToCartBtn.click();
      this.backBtn.click();
      return this; 
    }

    getThirdProductInfo(){
      this.thirdArticle.click()
      thirdArticleName = this.articleName.getText();
      console.log(thirdArticleName)
      thirdArticlePrice = this.articlePrice.getText();
      console.log(thirdArticlePrice)
      this.addToCartBtn.click();
      this.backBtn.click();
      return this; 
    }

    goCart(){
      this.cartBtn.click();
      return this;
    }

    verifyCart(){
        const pageText = $('#cart_contents_container > div > div.cart_list').getText();
        //validation for each product within cart page
        if((pageText).indexOf(firstArticleName) > -1){
          if ((pageText).indexOf(firstArticlePrice) > -1){
            if((pageText).indexOf(secondArticleName) > -1){
              if((pageText).indexOf(secondArticlePrice) > -1){
                if((pageText).indexOf(thirdArticleName) > -1){
                  if((pageText).indexOf(thirdArticlePrice) > -1){
                    return true;
                  }
                  else{false}
                }
                else {false}
              }
              else{false}
            }
            else{false}
          }
          else {false}
        }
        else{false}
    }

    totalPrice(){
     totalP =  "$" + (parseFloat(firstArticlePrice.substring(1)) + parseFloat(secondArticlePrice.substring(1)) + parseFloat(thirdArticlePrice.substring(1)))
     console.log(totalP)
     return totalP;
    }

  }

export default new InventoryPage();
