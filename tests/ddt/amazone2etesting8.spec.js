import {test,expect} from "@playwright/test"
import locator from "../../POMAMAZON/locator.page"
import e2eamazon from "../../e2etest/e2eamazon.json"
test("amazon scenario",async({page})=>{
    let locat=new locator(page)
    let url=e2eamazon.url
    let mail=e2eamazon.emailtf
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    await page.goto(url)
    await locat.mobileloc.click()
    await locat.phone.click()
    
    // await locat.silvercol.click()
    await locat.storage.click()


    await locat.addbye.click()
    await locat.emailtf.fill(mail)
    await locat.tocontinue.click()
    await page.screenshot({path:"screenshot/details.png"})

})       