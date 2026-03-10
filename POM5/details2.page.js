class details{
    constructor(page){
        this.pagedet=page.locator('//span[text()=" Pages "]')
        this.aboutus=page.locator('//span[text()="About Us "]')
    }
}
export default details
