class doctoradd{
    constructor(page){
        this.doctorlnk=page.locator('//span[text()=" Doctors "]')
        this.adddoclnk=page.locator('//span[text()=" Add Doctor"]')
        this.doctorspltf=page.locator('//select[@name="Doctorspecialization"]')
        this.doctornametf=page.locator('//input[@name="docname"]')
        this.docaddresstf=page.locator('//textarea[@name="clinicaddress"]')
        this.doctorfees=page.locator('//input[@name="docfees"]')
        this.contnotf=page.locator('//input[@name="doccontact"]')
        this.mailtf=page.locator('//input[@name="docemail"]')
        this.passwordtf=page.locator('//input[@name="npass"]')
        this.confpasswordtf=page.locator('//input[@name="cfpass"]')
        this.submitbtn=page.locator('//button[@name="submit"]')
       
    }
}
export default doctoradd
