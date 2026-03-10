class details{
    constructor(page){
        this.patient=page.locator('//span[text()=" Patients "]')
        this.managepatient=page.locator('//span[text()=" Manage Patients "]')

    }
}
export default details
