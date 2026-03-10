import {test} from "@playwright/test"
import path from "path"
import fs from "fs"
//********/ we need to import path because Because path is not a Playwright feature and not a JavaScript keyword —
//it is a Node.js built-in module.
//So you must import it before using it.
test("download",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.locator('//textarea[@id="writeArea"]').fill("I AM NOT EVEN GET FEAR IN JAVASCRIPT AND PLAYWRIGHT, NO ONE CAN STOP ME TO GET SELECTED WITH IN 1 MONTH")
await page.locator('//input[@id="fileName"]').fill("dnsdsj.txt")
// let [downloadfile] = await Promise.all([
//     page.waitForEvent("download"),
//     page.locator('//button[@id="downloadButton"]').click()
// ]) 

// or this method without using promise.all()

let download=page.waitForEvent("download")
await page.getByRole("button",{name:"Download"}).click()
let downloadfile=await download
let downloadfolder="c:/Users/admin/OneDrive/Desktop/download"
let filename=downloadfile.suggestedFilename()
await downloadfile.saveAs(path.join(downloadfolder,filename))
// file exist or not

let fullfile=path.join(downloadfolder,filename)
if(fs.existsSync(fullfile)){
    console.log(`file exists:${fullfile}`);
    } else{
        console.log(`file does not exists:${fullfile}`);
        
    }
    
})  
 