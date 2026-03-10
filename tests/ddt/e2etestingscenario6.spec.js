import {test,expect} from "@playwright/test"
import actionbutton from "../../POM6/actionbutton.page"
import adminloginbtn3 from "../../POM6/adminloginbtn3.page"
import adminloginpage3 from "../../POM6/adminloginpage3.page"
import conatctus from "../../POM6/conatctus.page"
import text from "../../POM6/text.page"
import e2e5 from "../../e2etest/e2e5.json"
test("scenario6",async({page})=>{
    let admlog3=new adminloginbtn3(page)
    let url=e2e5.url
    let username=e2e5.un
    let password=e2e5.pwd
    let textfield=e2e5.tf
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    await page.goto(url)
    let[b]=await Promise.all([page.waitForEvent("popup"),
    admlog3.admlog.click()])
let admpg=new adminloginpage3(b)
await admpg.untf.fill(username)
await admpg.pwdtf.fill(password)
await admpg.loginbtn.click()
await expect(b).toHaveURL(url)//url"http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/admin/dashboard.php")
let cont=new conatctus(b)
await cont.conatctuslink.click()
await cont.unreadq.click()
let actb=new actionbutton(b)
await actb.actbtn.click()
 let txt=new text(b)
 await txt.tf.fill(textfield)
 await txt.submitbtn.click()
  await b.screenshot({path:"screenshot/submit.png"})

})