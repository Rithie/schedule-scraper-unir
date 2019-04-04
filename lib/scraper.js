import axios from 'axios';
import cheerio from 'cheerio';



async function getHtml(url) {
    const { data:html } = await axios.get(url);
    return html
}

async function getCircularHorarios(html) {
    let arr = []
    let arr2 = []
    const $ = cheerio.load(html)
    
    $("table#tabelaHorarios > tbody > tr > td.col-xs-4").each(function(){
        $("span.item_horario ").each(function(j,x){
            arr[j] = $(this).text();
        })
        arr2.push(arr)
    })
    
    return arr2
}
export { getHtml, getCircularHorarios };