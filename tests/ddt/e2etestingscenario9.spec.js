import {test,expect} from "@playwright/test"
import doctorloginbtn from "../../POM8/doctorloginbtn.page"
import doctorloginpage from "../../POM8/doctorloginpage.page"
import addpatient from "../../POM8/addpatient.page"
import patientdetails from "../../POM8/patientdetails.page"
import e2e7 from "../../e2etest/e2e7.json"
import managepat from "../../POM8/managepat.page"
import e2e8 from "../../e2etest/e2e8.json"
import logout from "../../POM7/logout.page"
import e2e9 from "../../e2etest/e2e9.json"
test("scenario9",async({page})=>{
    let doclogbtn=new doctorloginbtn(page)
    let url=e2e7.url
    let username=e2e7.un
    let password=e2e7.pwd
    let name=e2e7.pname
    let contact=e2e7.pcont
    let address=e2e7.paddress
    let medical=e2e7.pmedhis
    let age=e2e7.page
    let mail=e2e7.pmail
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    await page.goto(url)
    let[a]=await Promise.all([
        page.waitForEvent("popup"),
        doclogbtn.loginbtn.click()
    ])
    let doclogpg=new doctorloginpage(a)
    await doclogpg.untf.fill(username)
    await doclogpg.pwdtf.fill(password)
    await doclogpg.loginbtn.click()
    let url1=e2e9.url
     await expect(a).toHaveURL(url1)
     let addp=new addpatient(a)
     await addp.patientslnk.click()
     await addp.addpatientlnk.click()
      let ptdls=new patientdetails(a)
      await ptdls.patientname.fill(name)
      await ptdls.patientcontact.fill(contact)
      await ptdls.pmail.fill(mail)
      await ptdls.patientgender.click()
      await ptdls.address.fill(address)
      await ptdls.age.fill(age)
      await ptdls.medhis.fill(medical)
       let addp2=new addpatient(a)
       await addp2.patientslnk.click()
       await addp2.managelnk.click()
       let bloodpres=e2e8.bp
       let bloodsug=e2e8.bs
       let weg=e2e8.weight
       let tem=e2e8.temp
       let press=e2e8.pres
       let mngp=new managepat(a)
       await mngp.actionbtn.click()
       await mngp.addmed.click()
       await mngp.bp.fill(bloodpres)
       await mngp.bs.fill(bloodsug)
       await mngp.weight.fill(weg)
       await mngp.temp.fill(tem)
       await mngp.pres.fill(press)
       await mngp.submit.click()

await a.screenshot({path:"screenshot/int.png"})
let logedout=new logout(a)
await logedout.admindp.click()
await logedout.logoutbtn.click()
})
   
