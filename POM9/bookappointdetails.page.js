class bookappointmentdetails{
    constructor(page){
        this.spcldrop=page.locator('//select[@name="Doctorspecialization"]')
        this.doctors=page.locator('//select[@id="doctor"]')
        this.fees=page.locator('//select[@id="fees"]')
        this.date=page.locator('//input[@name="appdate"]')
        this.time=page.locator('//input[@id="timepicker1"]')
        this.submitbtn=page.locator('//button[@class="btn btn-o btn-primary"]')
    }
}
export default bookappointmentdetails
