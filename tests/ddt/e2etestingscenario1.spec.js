import {test} from "@playwright/test"
import addpatient from "../../POM/addpatient.page"
import patientbtn from "../../POM/patientbtn.page"
import doctorpage from "../../POM/doctor.page"
import doctorsignbtn from "../../POM/doctorsignbtn.page"
import e2e from "../../e2etest/e2e.json"
test("scenario1",async({page})=>{
    let url= e2e.url
    let username=e2e.un
    let password=e2e.pwd
    let name=e2e.pname
    let contact=e2e.cno
    let mailid=e2e.email
    let addr=e2e.address
    let aged=e2e.age
    let medh=e2e.medical
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    let doctorsgnpage=new doctorsignbtn(page)
await page.goto(url)
let [a]=await Promise.all([
page.waitForEvent("popup"),
 doctorsgnpage.signbtn.click()])
 let doctorpage1=new doctorpage(a)
    await doctorpage1.untf.fill(username)
    await doctorpage1.pwdtf.fill(password)
    await doctorpage1.loginbtn.click()
     let patientpage=new patientbtn(a)
    await patientpage.patientdrop.click()
    await patientpage.addpatientbtn.click()
    let addpatientpage=new addpatient(a)
    await addpatientpage.nametf.fill(name)
    await addpatientpage.cnotf.fill(contact)
    await addpatientpage.emailtf.fill(mailid)
    await addpatientpage.addresstf.fill(addr)
     await addpatientpage.genderrb.click()
await addpatientpage.agetf.fill(aged)
await addpatientpage.medicaltf.fill(medh)
await addpatientpage.addbtn.click()

})

