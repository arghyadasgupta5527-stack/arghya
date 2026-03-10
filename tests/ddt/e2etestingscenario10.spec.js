import {test,expect} from "@playwright/test"
import adminloginbutton from "../../POM9/adminloginbutton.page"
import adminloginpage from "../../POM9/adminloginpage.page"
import bookappointdetails from "../../POM9/bookappointdetails.page"
import bookappointlnk from "../../POM9/bookappointlnk.page"
import doctoradd from "../../POM9/doctoradd.page"
import doctorloginbutton from "../../POM9/doctorloginbutton.page"
import doctorloginpage from "../../POM9/doctorloginpage.page"
import doctorpagesearch from "../../POM9/doctorpagesearch.page"
import logoutadmin from "../../POM9/logoutadmin.page"
import logoutpatient from "../../POM9/logoutpatient.page"
import patientloginbutton from "../../POM9/patientloginbutton.page"
import patientloginpage from "../../POM9/patientloginpage.page"
import e2e10 from "../../e2etest/e2e10.json"
import e2e11 from "../../e2etest/e2e11.json"
import e2e12 from "../../e2etest/e2e12.json"
import e2e4 from "../../e2etest/e2e4.json"
import e2e3 from "../../e2etest/e2e3.json"
import e2e from "../../e2etest/e2e.json"

test("scenario10",async({page})=>{
let admlogbtn=new adminloginbutton(page)
let url=e2e11.url
let admusername=e2e4.un
let admpassword=e2e4.pwd
let ptnusername=e2e3.un
let ptnpasword=e2e3.pwd
let searchpatienttextfield=e2e11.searchtf
let doctorspecialist=e2e10.doctorspl
let doctorname=e2e10.doctorname
let doctormail=e2e10.mail
let doctorfees=e2e10.fees
let doctorpassword=e2e10.password
let doctorconfirmpassword=e2e10.confirmpassword
let doctoradress=e2e10.doctoraddress
let doctorcontact=e2e10.contactno
let againdocspl=e2e12.doctorspl
let againdocname=e2e12.docname
let docdate=e2e12.date
let doctime=e2e12.time
let docusername=e2e.un
let docpassword=e2e.pwd
let urlother=e2e11.urloth
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
 await page.goto(url)  
 let[a]=await Promise.all([
        page.waitForEvent("popup"),
       admlogbtn.admlog.click()
    ])
    let admlogpg=new adminloginpage(a)
    await admlogpg.untf.fill(admusername)
    await admlogpg.pwdtf.fill(admpassword)
    await admlogpg.loginbtn.click()
    await expect(a).toHaveURL(urlother)
    let docadd=new doctoradd(a)
    await docadd.doctorlnk.click()
    await docadd.adddoclnk.click()
    await docadd.doctorspltf.selectOption({ label: doctorspecialist })
    await docadd.doctornametf.fill(doctorname)
    await docadd.docaddresstf.fill(doctoradress)
    await docadd.doctorfees.fill(doctorfees)
    await docadd.contnotf.fill(doctorcontact)
    await docadd.mailtf.fill(doctormail)
    await docadd.passwordtf.fill(doctorpassword)
    await docadd.confpasswordtf.fill(doctorconfirmpassword)
    await docadd.submitbtn.click()
    let logoutadm=new logoutadmin(a)
    await logoutadm.admindp.click()
    await logoutadm.logoutbtn.click()
    let ptnlogbtn1=new patientloginbutton(page)
    let[b]=await Promise.all([
        page.waitForEvent("popup"),
      ptnlogbtn1.ptnlogbtn.click()
    ])
    let ptnlogpg=new patientloginpage(b)
    await ptnlogpg.un.fill(ptnusername)
    await ptnlogpg.pwd.fill(ptnpasword)
    await ptnlogpg.login.click()
    let apptlnk1=new bookappointlnk(b)
    await apptlnk1.bookaptlnk.click()
    let appdetls=new bookappointdetails(b)
    await appdetls.spcldrop.selectOption({ label: againdocspl })
    await appdetls.doctors.selectOption({ label: againdocname })
    await appdetls.date.fill(docdate)
    await appdetls.time.fill(doctime)
    await appdetls.submitbtn.click()
    let logoutptn=new logoutpatient(b)
    await logoutptn.patientdropdown.click()
    await logoutptn.logoutbtn.click()
    let doclogbtn=new doctorloginbutton(page)
    let[c]=await Promise.all([
       page.waitForEvent("popup"),
      doclogbtn.doctorloginbtn.click()
    ])
    let doclogpg=new doctorloginpage(c)
    await doclogpg.untf.fill(docusername)
    await doclogpg.pwdtf.fill(docpassword)
    await doclogpg.loginbtn.click()
    let docserch=new doctorpagesearch(c)
    await docserch.searchbtn.click()
    await docserch.searchtf.fill(searchpatienttextfield)
    await c.screenshot({path:"screenshot/show.png"})
    await docserch.searchbtn.click()
    await c.screenshot({path:"screenshot/show2.png"})
       
})

 