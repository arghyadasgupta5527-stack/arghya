import {test} from "@playwright/test"
import data from "../../test data/data.json"
test("",async({page})=>{
for(let d of data.valid){
    await page.goto(d.url)
    await page.locator('//input[@id="username"]').fill(d.un)
    await page.locator('//input[@id="password"]').fill(d.pwd)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid cred");
        
        }else{
            console.log("invalid cred");
        }
        }
for(let d of data.invalid){
    await page.goto(d.url)
    await page.locator('//input[@id="username"]').fill(d.un)
    await page.locator('//input[@id="password"]').fill(d.pwd)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid cred");
        
        }else{
            console.log("invalid cred");
        }
        }
})
// to avoid duplicate code we can use loop of loop

test.only(" to avoid duplicate",async({page})=>{
    for(let key in data){
        console.log(key);
        for(let d of data[key]){
            await page.goto(d.url)
            await page.locator('//input[@id="username"]').fill(d.un)
            await page.locator('//input[@id="password"]').fill(d.pwd)
            await page.locator('//button[@id="submit"]').click()
            let title=await page.title()
            if(title=="Logged In Successfully | Practice Test Automation"){
                console.log("valid cred");
                
                }else{
                    console.log("invalid cred");
                }
        }
    }
})