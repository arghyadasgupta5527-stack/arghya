import {test} from "@playwright/test"
test("keyboard",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator('//input[@type="text"]').type("8100486276")
    await page.keyboard.type("8100486276")
    await page.waitForTimeout(3000)
})
// test.only("key",async({page})=>{
//     await page.goto("https://www.facebook.com/")
//    await page.locator('//input[@type="text"]').fill("8100486276")
//     await page.waitForTimeout(3000)
//    await page.keyboard.press("Control+A")
//     await page.waitForTimeout(3000)
//    await page.keyboard.press("Control+C")
//     await page.waitForTimeout(3000)
//    await page.keyboard.press("Tab")
//     await page.waitForTimeout(3000)
//    await page.keyboard.press("Control+V")
//    await page.waitForTimeout(3000)

// })
 test.only("key",async({page})=>{
    await page.goto("https://www.amazon.in/")
    for (let index = 1; index < 10; index++) {
        
        await page.keyboard.press("ArrowDown")
    }
   for (let index = 1; index < 7; index++) {
        await page.keyboard.press("ArrowUp")

 }
    await page.waitForTimeout(7000)
 })  
