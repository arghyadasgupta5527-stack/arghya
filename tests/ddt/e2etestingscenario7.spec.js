import {test,expect} from "@playwright/test"
import adminloginbtn4 from "../../POM7/adminloginbtn4.page"
import adminloginpage4 from "../../POM7/adminloginpage4.page"
import logout from "../../POM7/logout.page"
import patientsearchtf from "../../POM7/patientsearchtf.page"
import textfield from "../../POM7/textfield.page"
import e2e6 from "../../e2etest/e2e6.json"
test("scenario7",async({page})=>{
    let admlog4=new adminloginbtn4(page)
    let url=e2e6.url
    let username=e2e6.un
    let password=e2e6.pwd
    let phoneno=e2e6.mobileno
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    await page.goto(url)
    let[b]=await Promise.all([page.waitForEvent("popup"),
    admlog4.admlog.click()])
    let admlogpage=new adminloginpage4(b)
    await admlogpage.untf.fill(username)
    await admlogpage.pwdtf.fill(password)
    await admlogpage.loginbtn.click()
    await expect(b).toHaveURL("http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/admin/dashboard.php")
    let ptsrtf=new patientsearchtf(b)
    await ptsrtf.searchtf.click()
    let tf=new textfield(b)
    await tf.tf.fill(phoneno)
    await tf.submit.click()
     let logt=new logout(b)
     await logt.admindp.click()
     await logt.logoutbtn.click()
     await b.screenshot({path:"screenshot/loggedout.png"})

    



})