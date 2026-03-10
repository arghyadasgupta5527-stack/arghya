import {test} from "@playwright/test"
test("explicit waits",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForSelector('//input[@id="twotabsearchtextbox"]',{status:'visible',timeout:5000})
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone")
    await page.locator('//div[@role="row"]',{hasText:"15 128+gb"}).waitFor()
   let a= await page.locator('//div[@role="row"]').allTextContents()
   console.log(a);
   


})
