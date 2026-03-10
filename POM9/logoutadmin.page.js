class logoutadmin{
    constructor(page){
        this.admindp=page.locator('//span[@class="username"]')
        this.logoutbtn=page.locator('//a[@href="logout.php"]')
    }
}
export default logoutadmin
