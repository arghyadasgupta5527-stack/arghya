class addpatient{
    constructor(page){
        this.patientslnk=page.locator('//a[@href="javascript:void(0)"]')
        this.addpatientlnk=page.locator('//a[@href="add-patient.php"]')
        this.managelnk=page.locator('//a[@href="manage-patient.php"]')
    }
}
export default addpatient
