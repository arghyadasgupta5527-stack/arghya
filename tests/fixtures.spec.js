import {test} from "@playwright/test"
// test("fixtures",async({page})=>{
//     await page.goto("https://www.facebook.com/")
//    } )


test ("fixture",async({browserName,browser})=>{
    console.log(browserName);
    
 let context =  await browser.newContext()
 let page= await context.newPage()
  await page.goto("https://www.flipkart.com/")
  // await page.goto(asdghbbgnnhh)
})
