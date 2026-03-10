import {test} from "@playwright/test"
import adminloginbtn2 from "../../POM5/adminloginbtn2.page"
import adminlogpage2 from "../../POM5/adminloginpage2.page"
import details2 from "../../POM5/details2.page"
import submitbtn from "../../POM5/submitbtn.page"
import e2e4 from "../../e2etest/e2e4.json"
test("scenario5",async({page})=>{
    let url=e2e4.url
    let username=e2e4.un
    let password=e2e4.pwd
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    let admbtn=new adminloginbtn2(page)
    await page.goto(url)
    let[b]=await Promise.all([page.waitForEvent("popup"),
    admbtn.admlog.click()])
let admpg=new adminlogpage2(b)
await admpg.untf.fill(username)
await admpg.pwdtf.fill(password)
await admpg.loginbtn.click()
 let det=new details2(b)
 await det.pagedet.click()
 await det.aboutus.click()
 let sub=new submitbtn(b)
 await sub.btn.click()
  await b.screenshot({path:"screenshot/details3.png"})
    })