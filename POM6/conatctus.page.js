class conatctus{
    constructor(page){
    this.conatctuslink=page.locator('//span[text()=" Conatctus Queries "]')
    this.unreadq=page.locator('//span[text()=" Unread Query "]')
    }
}
export default conatctus
