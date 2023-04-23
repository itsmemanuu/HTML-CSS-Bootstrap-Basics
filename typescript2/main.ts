import { Serie } from "./serie.js";
import { series } from "./data.js";
import { hash } from "./data.js";

let serieTable: HTMLElement = document.getElementById("seriesTable")!;
let arrayTemporadas: number[] = [];

series.forEach((serie) => {
  mostrarSeries(serie);
  arrayTemporadas.push(serie.temporadas);
});

function mostrarSeries(serie: Serie): void {
  let tbodySerie = document.createElement("tbody");
  tbodySerie.innerHTML = `<tr">
    <th scope="row">${serie.id}</th>
    <td>${serie.nombre}</td>
    <td>${serie.network}</td>
    <td>${serie.temporadas}</td></tr>`;
  serieTable.appendChild(tbodySerie);
}

let tempAvg: HTMLElement = document.getElementById("avg")!;
// let clicked1: HTMLElement = document.getElementById(number)!;
// console.log(clicked1);

tempAvg.innerHTML = `Seasons average: ${average(arrayTemporadas)}`;

function average(arrayTemporadas: number[]): number {
  let sum = 0;
  arrayTemporadas.forEach((temporada) => {
    sum += temporada;
  });
  return sum / arrayTemporadas.length;
}

serieTable.click();

function initPage() {
  let serieTable: HTMLTableElement = <HTMLTableElement>(
    document.getElementById("seriesTable")!
  );
  let rows = serieTable.getElementsByTagName("tr");
  for (let i = 0; i < serieTable.rows.length; i++) {
    rows[i].addEventListener("click", function () {
      let clickedRow = this.rowIndex;
      let serie = hash.get(clickedRow);
      buildCard(serie);
    });
  }
}

initPage();

function buildCard(serie: any) {
  let card = document.getElementById("card")!;
  card.innerHTML = `<img src="${serie.imagen}" class="card-img-top"> 
  <div class="card-body">
  <p class="card-text"><h1>${serie.nombre}</h1></p>
  <p class="card-text">${serie.descripcion}</p>
  <a href="url">${serie.streaming}</a>`;
}
