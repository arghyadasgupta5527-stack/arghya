class contactforms{
    constructor(page){
        this.name=page.locator('//input[@name="fullname"]')
        this.mailid=page.locator('//input[@name="emailid"]')
        this.mobile=page.locator('//input[@name="mobileno"]')
        this.massage=page.locator('//textarea[@name="description"]')
        this.send=page.locator('//button[@name="submit"]')


    }
}
export default contactforms