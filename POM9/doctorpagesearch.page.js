class doctorpagesearch{
    constructor(page){
        this.searchbtn=page.locator('//span[text()=" Search "]')
        this.searchtf=page.locator('//input[@id="searchdata"]')
    }
}
export default doctorpagesearch
