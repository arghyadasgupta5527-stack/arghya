import {test} from "@playwright/test"
test("customdropdowns",async({page})=>{
    await page.goto("https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=shoes&crid=2956QM89L02RN&sprefix=shoes%2Caps%2C503")
    await page.locator('//span[@class="a-button-text a-declarative"]').click()
     await page.locator('//a[@class="a-dropdown-link"]').nth(1).waitFor()
  let a=await page.locator('//a[@class="a-dropdown-link"]').all()
  for(let opt of a){
    let text=await opt.textContent()
    if(text.includes("Price: High to Low")){
        await opt.click()
    }
  }

    
})  
