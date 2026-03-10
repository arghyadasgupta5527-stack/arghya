class patientloginpage{
    constructor(page){
        this.un=page.locator('//input[@name="username"]')
        this.pwd=page.locator('//input[@name="password"]')
        this.login=page.locator('//button[@class="btn btn-primary pull-right"]')

    }
}
export default patientloginpage

