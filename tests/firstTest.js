const { Builder, By, Key } = require("selenium-webdriver")

async function example() {

    // https://saucelabs.com/resources/blog/selenium-javascript-tutorial-web-automation
    // https://youtu.be/BQ-9e13kJ58?si=j5U_XEyNYzQOLBGV&t=1474
    // Launch browser
    let driver = await new Builder().forBrowser("chrome").build()
    // Navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/")
    // Add a todo/task
    await driver.findElement(By.id("sampletodotext")).sendKeys("Walk the doggo", Key.RETURN)

    // Close browser
    await driver.quit()


}

example()
