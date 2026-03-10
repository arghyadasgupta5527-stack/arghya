class logoutpatient{
    constructor(page){
        this.patientdropdown=page.locator('//i[@class="ti-angle-down"]')
        this.logoutbtn=page.locator('//a[@href="logout.php"]')
    }
}
export default logoutpatient
