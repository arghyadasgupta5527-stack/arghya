import {test} from "@playwright/test"
test("navigation",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await Promise.all([ page.waitForNavigation(),
    page.click('//div[@id="nav-cart-count-container"]')])
    // page.pause()
   
})      