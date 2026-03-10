import {test} from "@playwright/test"
test("notifications",async({browser})=>{
    let context=await browser.newContext({permissions: ["notifications"]})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator('//button[text()="Notification"]').click()
     await page.waitForTimeout(2000)
  
    let test=await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log(test);
   
    
})