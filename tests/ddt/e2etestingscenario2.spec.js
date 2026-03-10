import {test} from "@playwright/test"
import bookapp from "../../POM3/book.page" 
import bookmyapt from "../../POM3/myapt.page"
import ptn from "../../POM3/ptn.page"
import userbook from "../../POM3/userbook.page"
import e2e3 from "../../e2etest/e2e3.json" 
test("scenario3",async({page})=>{
    let bkapp=new bookapp(page)
    let bookmyt=new bookmyapt(page)
    let PTN=new ptn(page)
     let usb=new userbook(page)
    let url=e2e3.url
    let username=e2e3.un
    let password=e2e3.pwd
    let time=e2e3.time
    let date=e2e3.date
    let spel=e2e3.doctorspl
    let fees=e2e3.fees
    let doctorfill=e2e3.doctor

    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    await page.goto(url)
    await bkapp.appointmentbtn.click()
    await PTN.un.fill(username)
    await PTN.pwd.fill(password)
    await PTN.login.click()
   await bookmyt.bookaptbtn.click()
    await usb.spcldrop.selectOption(spel)
    await usb.doctors.selectOption(doctorfill)
    await usb.date.fill(date)
    await usb.time.fill(time)
    await usb.submitbtn.click()

})

