import {test} from '@playwright/test'
test("dialogs",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){
            console.log(await dialog.message());
            await dialog.accept();
        } else if(dialog.type()=="confirm"){
            await dialog.dismiss();
        } else if(dialog.type()=="prompt"){
            if(dialog.defaultValue=="abc"){
                console.log(await dialog.defaultValue());
            } else {
                await dialog.accept("abc");
            }
        }
    });
    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await page.waitForTimeout(2000)
})


test.only("dialogsss",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   

await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.waitForTimeout(2000)
     page.once("dialog",async(dialog)=>{
        if(dialog.type()=="prompt"){
            if(dialog.defaultValue()=="abc"){
                console.log(dialog.defaultValue());
                
            } else {
                 
                await dialog.accept("fjfhfjsddshjsgs")  
               
            }
        }
    });
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await page.waitForTimeout(2000)
})
