import {test} from "@playwright/test"
test("browser controls",async({page})=>{
    // test.setTimeout(7000)

    await page.goto("https://www.facebook.com/")
    console.log(await page.title());
    console.log(await page.url());
    
//     const a=await page.viewportSize()           // before ViewportSize
//     console.log(a);
    
//     await page.setViewportSize({width:1000,height:500})  // setViewportSize
    
   
//     let b= await page.viewportSize()    // after ViewportSize
//     console.log(b);i

    

// })

// title

await page.goto("https://www.google.com/")
console.log(await page.title());

// url
console.log(await page.url());
})


