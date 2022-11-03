const puppeteer = require("puppeteer");

const tag = "dogs";
const likes = 5;
let counterLike = 0;

//fuction async auto ejecutions
(async () => {
  try {
    //open chrome
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
    });

    //new page
    const page = await browser.newPage();
    await page.goto(
      "https://www.linkedin.com/checkpoint/rm/sign-in-another-account?trk=homepage-basic_intl-segments-login"
    );

    await page.waitForSelector('input[name="session_key"]', {
      visible: true,
    });

    await page.type("input[name='session_key']", "arenca44@gmail.com", {
      delay: 200,
    });
    await page.type("input[id='password']", "20160710Cx", {
      delay: 200,
    });

    await page.click("button[data-litms-control-urn='login-submit']");

    await page.waitForSelector("div[id='global-nav-search']", {
      visible: true,
    });

    await page.click("div[id='global-nav-search']");

    await page.type("input[aria-label='Buscar']", "full stack", {
      delay: 200,
    });

    await page.keyboard.press("Enter", {
      delay: 100,
    });

    await page.waitForSelector(
      "button[aria-label='Mostrar todos los filtros. Al hacer clic en este botón, se muestran todas las opciones de filtros disponibles.']",
      {
        visible: true,
      }
    );

    await page.click(
      "button[aria-label='Mostrar todos los filtros. Al hacer clic en este botón, se muestran todas las opciones de filtros disponibles.']"
    );

    await page.waitForSelector("input[value='116859411']", {
      visible: true,
    });

    await page.click("input[value='116859411']", {
      clickCount: 5,
    });

    await page.click(
      "button[aria-label='Aplicar los filtros actuales para mostrar resultados']",
      {
        clickCount: 4,
      }
    );
    /* 
//    await page.click("a[class='app-aware-link ']");
await page.waitForSelector("a[class='app-aware-link ']", {
  visible: true,
});*/

    //https://www.linkedin.com/jobs/search/?currentJobId=3302559308&keywords=full%20stack&start=75
  } catch (error) {
    console.error(error);
  }
})();
