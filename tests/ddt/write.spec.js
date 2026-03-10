import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("write data",async({page})=>{
    let book=new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../test data/excel worksheet.xlsx"))
let sheet=await book.getWorksheet("Sheet5")
if(!sheet){
    sheet=await book.addWorksheet("Sheet5")
}
// sheet.getRow(1).getCell(1).value="This is my first cell"
// display all the auto suggestions in amazon

await page.goto("https://www.amazon.in/")
await page.locator('//input[@type="text"]').fill("shoes")
await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').first().waitFor()
let allop=await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
console.log(allop);

//store all the auto suggestions in excel sheet

for(let a of allop){
    let i=allop.indexOf(a)
    sheet.getRow(i+1).getCell(1).value=a
}
await book.xlsx.writeFile(path.join(__dirname,"../../test data/excel worksheet.xlsx"))
})
    


