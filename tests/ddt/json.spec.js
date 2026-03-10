import {test} from '@playwright/test'
import fs from 'fs'
let datafile=fs.readFileSync("C:/Users/admin/OneDrive/Desktop/other playwright/test data/singledata.json")
let data=JSON.parse(datafile)
test("single json file",async({page})=>{
    // console.log(data.greet);
    // data.forEach(d => {
    //     console.log(d.greet);
    for(let d of data){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.un)
        await page.locator('//input[@id="password"]').fill(d.pwd)
        await page.locator('//button[@id="submit"]').click()
       
    let title=await page.title()
    // console.log(title);
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid cred");
        
        }else{
            console.log("invalid cred");
        }
        }
    })
    
