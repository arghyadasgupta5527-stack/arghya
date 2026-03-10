class textfield{
    constructor(page){
        this.tf=page.locator('//input[@id="searchdata"]')
        this.submit=page.locator('//button[@id="submit"]')
    }
}
export default textfield
