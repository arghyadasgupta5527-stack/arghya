import {test} from "@playwright/test"
import contactform from "../../POM2/contactform.page"
import e2e2 from "../../e2etest/e2e2.json"
test("scenario3", async ({page}) => {
    let url= e2e2.url
    let nam= e2e2.name
    let mail=e2e2.mailid
    let mno=e2e2.mobileno
    let msg=e2e2.massage
    let conform=new contactform(page)
    await page.goto(url)
    await conform.name.fill(nam)
    await conform.mailid.fill(mail)
    await conform.mobile.fill(mno)
    await conform.massage.fill(msg)
    await conform.send.click()

})