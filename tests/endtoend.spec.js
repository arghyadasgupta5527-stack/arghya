import {test} from "@playwright/test"
import landing  from "../pageobjectmodel/landing.page.js"
import signup from "../pageobjectmodel/signup.page.js"
import signin from "../pageobjectmodel/signin.page.js"
import homepage from "../pageobjectmodel/home.page.js"
import createticket from "../pageobjectmodel/createticket.page.js"
import testdata from "../test data/endtoend.json"
test("",async({page})=>{
    let url=testdata.url
    let name=testdata.name
    let email=testdata.email
    let pwd=testdata.password
    let repwd=testdata.reenterpassword
    let contact=testdata.contactno
    let subject=testdata.subject
    let des=testdata.des
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let signinpage=new signin(page)
    let homepageh=new homepage(page)
    let createticketpage=new createticket(page)
//launch the url
await page.goto(url)
await landingpage.signuplink.click()
//pass name for nametf
await signuppage.nametf.fill(name)

//email tf
await signuppage.emailtf.fill(email)
//password tf
await signuppage.passwordtf.fill(pwd)
//repeat password tf
await signuppage.reenterpasswordtf.fill(repwd)
//contact no tf
await signuppage.contactnotf.fill(contact)
//radio button gender
await signuppage.maleradiobtn.click()
//click on submit button
await signuppage.submitbtn.click()
//alert popup handle-- get the massage

//email id tf
await signinpage.mailtf.fill(email)
//password tf
await signinpage.passwordtf.fill(pwd)
//click on login
await signinpage.loginbtn.click()
//create ticket click
await homepageh.ticketlink.click()
//add subject to subject tf
await createticketpage.subjecttf.fill(subject)
//select an option from task type dropdown
await createticketpage.tasktypedropdown.selectOption({value:"ot1"})
//priority dropdown
await createticketpage.prioritydropdown.selectOption({value:"important"})
//description tf
await createticketpage.descriptiontf.fill(des)
// click on send button
await createticketpage.sendbtn.click()
//alert --msg--accept
//click on view ticket
await homepageh.viewticketlink.click()
//take screenshot of the ticket details page
await page.screenshot({path:"screenshot/ticketdetails.png"})

})      