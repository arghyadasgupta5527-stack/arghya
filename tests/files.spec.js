import {test} from "@playwright/test"
import path from "path"
test("files",async({page})=>{
    console.log(__dirname);
    
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../uploadfiles/aa.xlsx"))
await page.getByRole("button",{name:"Upload Single File"}).click()
await page.waitForTimeout(2000)
})