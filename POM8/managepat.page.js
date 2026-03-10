class managepat{
    constructor(page){
        this.actionbtn=page.locator('//a[@href="view-patient.php?viewid=50"]')
        this.addmed=page.locator('//button[@class="btn btn-primary waves-effect waves-light w-lg"]')
        this.bp=page.locator('//input[@name="bp"]')
        this.bs=page.locator('//input[@name="bs"]')
        this.weight=page.locator('//input[@name="weight"]')
        this.temp=page.locator('//input[@name="temp"]')
        this.pres=page.locator('//textarea[@name="pres"]')
        this.submit=page.locator('//button[@name="submit"]')
    }
}
export default managepat
