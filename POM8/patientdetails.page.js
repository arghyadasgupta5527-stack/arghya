class patientdetails{
    constructor(page){
        this.patientname=page.locator('//input[@name="patname"]')
        this.patientcontact=page.locator('//input[@name="patcontact"]')
        this.pmail=page.locator('//input[@id="patemail"]')
        this.patientgender=page.locator('//label[@for="rg-male"]')
        this.address=page.locator('//textarea[@name="pataddress"]')
        this.age=page.locator('//input[@name="patage"]')
        this.medhis=page.locator('//textarea[@name="medhis"]')
        this.addbtn=page.locator('//button[@name="submit"]')
    }
}
export default patientdetails
