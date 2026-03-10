class locator{
    constructor(page) {
        this.mobileloc=page.locator('//a[@href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]')
        this.phone=page.locator('//img[@alt="m17"]')
         this.silvercol=page.locator('//input[@aria-labelledby="color_name_0-announce"]')
        // this.silvercol = page.locator('input[aria-labelledby="color_name_0-announce"]')
        this.storage=page.locator('//span[text()=" 6GB + 128GB "]')
        this.addbye=page.locator('//input[@id="buy-now-button"]')
        this.emailtf=page.locator('//input[@id="ap_email_login"]')
        this.tocontinue=page.locator('//input[@type="submit"]')
    }
}
export default locator