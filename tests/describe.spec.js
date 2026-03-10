import {test} from "@playwright/test"
test.describe("describe",async()=>{
    // test.setTimeout(10000)
   
   
    test("valid data",async()=>{
       await console.log("valid");
        test.setTimeout(10000)
        
    })
    test("invalid data",async()=>{
       await console.log("invalid");

})
})  