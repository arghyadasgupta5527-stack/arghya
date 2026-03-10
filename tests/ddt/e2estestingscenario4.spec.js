import {test} from "@playwright/test"
import action from "../../POM4/action.page"
import adminloginbtn from "../../POM4/adminloginbtn.page"
import adminlogpage from "../../POM4/adminlogpage.page"
import details from "../../POM4/details.page"
import e2e4 from "../../e2etest/e2e4.json"
test("scenario4",async({page})=>{
    let url=e2e4.url
    let username=e2e4.un
    let password=e2e4.pwd
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    let admbtn=new adminloginbtn(page)
    await page.goto(url)
    let[a]=await Promise.all([page.waitForEvent("popup"),
    admbtn.admlog.click()])
let admpg=new adminlogpage(a)
await admpg.untf.fill(username)
await admpg.pwdtf.fill(password)
await admpg.loginbtn.click()
 let det=new details(a)
 await det.patient.click()
 await det.managepatient.click()
  let act=new action(a)
  await act.actbtn.click()
   await a.screenshot({path:"screenshot/details2.png"})
    
})
