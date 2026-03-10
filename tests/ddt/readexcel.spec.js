import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("read single",async({page})=>{
let book=new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../test data/excel worksheet.xlsx"))
let sheet=await book.getWorksheet("Sheet1")
let data=await sheet.getRow(1).getCell(1).value//toString()
console.log(data);

}) 
test("read multiple rows",async({page})=>{
    let book=new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../test data/excel worksheet.xlsx"))
let sheet=await book.getWorksheet("Sheet2")
for (let row = 1; row <= sheet.actualRowCount; row++) {
   
  for (let coloumn = 1; coloumn <= sheet.actualColumnCount; coloumn++) {
    let data=await sheet.getRow(row).getCell(coloumn).value
    console.log(data);
}
}
})
test.only("pass test data to the app",async({page})=>{
    let book=new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../test data/excel worksheet.xlsx"))
let sheet=await book.getWorksheet("Sheet3")
let alldata=[]
for (let r = 1; r <= sheet.actualRowCount; r++) {
    let row=sheet.getRow(r)
    let url=row.getCell(1).toString()
    let username=row.getCell(2).toString()
    let password=row.getCell(3).toString()
    alldata.push({url:url,username:username,password:password})

}
for(let d of alldata){
    await page.goto(d.url)
await page.waitForTimeout(2000)
await page.getByRole("link",{name:"Small CRM"}).click()
let p2=page.waitForEvent("popup")
let page2=await p2
await page2.locator('//a[text()="Admin"]').click()
await page2.locator('//input[@id="txtusername"]').fill(d.username)
await page2.locator('//input[@id="txtpassword"]').fill(d.password)
await page2.locator('//button[text()="Login"]').click()
await page2.close()// close the tab.
await page.waitForTimeout(2000)



}

})
