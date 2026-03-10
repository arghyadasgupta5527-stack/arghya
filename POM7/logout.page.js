class logout{
    constructor(page){
        this.admindp=page.locator('//span[@class="username"]')
        this.logoutbtn=page.locator('//a[@href="logout.php"]')
    }
}
export default logout
