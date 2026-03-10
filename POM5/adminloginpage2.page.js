class adminlogpage{
    constructor(page){
        this.untf=page.locator('//input[@name="username"]')
        this.pwdtf=page.locator('//input[@name="password"]')
        this.loginbtn=page.locator('//button[@name="submit"]')
    }
}
export default adminlogpage
