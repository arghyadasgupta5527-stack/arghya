class addpatient{
    constructor(page){
        this.nametf=page.locator('//input[@class="form-control" and @name="patname"]')
        this.cnotf=page.locator('//input[@class="form-control" and @name="patcontact"]')
        this.emailtf=page.locator('//input[@class="form-control" and @name="patemail"]')
        this.genderrb=page.locator('//label[@for="rg-male"]')
        this.addresstf=page.locator('//textarea[@name="pataddress"]')
        this.agetf=page.locator('//input[@name="patage"]')
        this.medicaltf=page.locator('//textarea[@name="medhis"]')
        this.addbtn=page.locator('//button[@name="submit"]')
        
    }
}
export default addpatient