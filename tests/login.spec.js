import {test} from "@playwright/test"
import logingpage from "../pageobjectmodel/loginpage.page.js"
import logindata from "../test data/logindata.json"
test("",async({page})=>{
   let log =new logingpage(page)
   let url=logindata.url
   let un=logindata.un
    let pwd=logindata.pwd
    //launch the url
    await page.goto(url)
    //pass usernamee
    await log.usernametextfield.fill(un)
    //pass password
    await log.passwordtextfield.fill(pwd)
    //click on submit button
    await log.submitbutton.click()
    await page.waitForTimeout(2000)




})