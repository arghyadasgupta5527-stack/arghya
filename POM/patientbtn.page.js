class patientbtn{
    constructor(page){
        this.patientdrop=page.locator('//a[@href="javascript:void(0)"]')
        this.addpatientbtn=page.locator('//span[text()=" Add Patient"]')
    }
}
export default patientbtn