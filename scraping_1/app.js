const cheerio = require("cheerio");
const axios = require("axios");

//Arrays de links
let empresArrayLinks = [];
let paginationArray = [];
let resultObject = [];

//Funcinon auto ejecutable async
(async () => {
try {
    // get  all the website HTML
    let response = await axios.get('https://chileservicios.com/empresas/').then(res =>  res.data);
    
    // load mHTML
    
    //select last link of the website


} catch (error) {
    console.error(error);
}    
})();
