class text{
    constructor(page){
        this.tf=page.locator('//textarea[@name="adminremark"]')
        this.submitbtn=page.locator('//button[@class="btn btn-primary pull-left"]')
    }
}
export default text
