import {Serie} from "./serie";
import {series} from "./data";


let serieTable: HTMLElement = document.getElementById("seriesTable")!;
let arrayTemporadas: number[] = [];

series.forEach(serie => {mostrarSeries(serie);arrayTemporadas.push(serie.temporadas)});

function mostrarSeries(serie: Serie):void{
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr>
    <th scope="row">${serie.id}</th>
    <td>${serie.nombre}</td>
    <td>${serie.network}</td>
    <td>${serie.temporadas}</td></tr>`
    serieTable.appendChild(tbodySerie);
}

let tempAvg: HTMLElement = document.getElementById("avg")!;


tempAvg.innerHTML = `Seasons average: ${average(arrayTemporadas)}`;

function average(arrayTemporadas: number[]):number{
    let sum = 0;
    arrayTemporadas.forEach(temporada => {
        sum += temporada;
    });
    return sum/arrayTemporadas.length;
}


