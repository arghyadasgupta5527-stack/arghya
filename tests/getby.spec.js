import {test,expect} from "@playwright/test"
test("getby",async({page})=>{
    // await page.goto("https://www.facebook.com/")
    // // await page.getByLabel("Email address or phone number").fill("8100486276")
    // // await page.getByPlaceholder("Password").fill("19982003")

    // ///// visible///////
    // await expect(page.locator('[value="1"]')).toBeVisible()

    // ////// page(url)////////
    // await expect(page).toHaveURL('https://www.facebook.com/')

    // ////// page(title)///////
    // await expect(page).toHaveTitle('Facebook – log in or sign up')



    // await expect(page.locator('[type="text"]')).toBeEditable('ajsbdsbdsjcbc')

    // await expect(page.getByText('Create a Page')).toBeEnabled()

    // await expect(page.locator('[type="text"]')).toBeEditable('ajsbdsbdsjcbc')

    // await expect(page.getByText('Create a Page')).toBeEnabled()

    // await expect(page.locator('[type="text"]')).toBeEmpty()
    // //  await expect(page.locator('[type="text"]')).toBeEmpty()


     //////// check box  ///////
await page.goto("https://www.amazon.in/s?k=iphone+17+pro&crid=3FKBMEEYQLVC6&sprefix=iphone%2Caps%2C2641&ref=nb_sb_ss_mvt-t11-ranker_1_4")
page.locator('.a-icon.a-icon-checkbox').click()
   await expect(page.locator('.a-icon.a-icon-checkbox')).toBeChecked()

})      
