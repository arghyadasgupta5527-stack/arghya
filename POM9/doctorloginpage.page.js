class doctorloginpage{
    constructor(page){
        this.untf=page.locator('//input[@name="username"]')
        this.pwdtf=page.locator('//input[@name="password"]')
        this.loginbtn=page.locator('//button[@class="btn btn-primary pull-right"]')
    }
}
export default doctorloginpage
