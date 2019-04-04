import { getHtml, getCircularHorarios } from './lib/scraper';

async function go(){
    //'https://www.expressounir.com.br/250-onibus-urbano/conjunto-amelia-torres-circular/bairro-santo-antonio-circular'
    const url = "https://www.expressounir.com.br/100-onibus-urbano/vera-cruz/pedro-leopoldo"
    const html = await getHtml(url)
    const horarios = await getCircularHorarios(html)
    console.log(horarios)
}

go();