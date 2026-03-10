import {test} from "@playwright/test"
test("drag and drop",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator('//div[text()="Mobile Charger"]').hover()
    await page.mouse.down()
    await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
    await page.mouse.up()
})