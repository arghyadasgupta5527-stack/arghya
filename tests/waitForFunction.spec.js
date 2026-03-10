import {test} from "@playwright/test"
test("wait for",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForFunction(()=>{return document.readyState==="complete"})
    await page.locator("input.lNPl8b").fill("mobile")
    await page.waitForFunction(()=>{let b=document.querySelectorAll(".URRkKz.RzamwD")
        return b.length>2
    })
    let a=await page.locator('//div[@class="URRkKz RzamwD"]').allTextContents()
    console.log(a);
    
})  

