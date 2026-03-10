import {expect, test} from "@playwright/test"
test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
   
//    let frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
// await frame1.locator('//input[@name="mytext1"]').fill("abc")
// await expect(frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('abc')
// })

let frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
let button=await frame3.frameLocator('//iframe').locator('//span[text()="Hi, I am the UI.Vision IDE"]')
await button.click()
await page.waitForTimeout(2000)
})     