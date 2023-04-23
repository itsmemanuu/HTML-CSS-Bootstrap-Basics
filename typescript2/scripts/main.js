import { series } from "./data.js";
import { hash } from "./data.js";
var serieTable = document.getElementById("seriesTable");
var arrayTemporadas = [];
series.forEach(function (serie) {
    mostrarSeries(serie);
    arrayTemporadas.push(serie.temporadas);
});
function mostrarSeries(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr\">\n    <th scope=\"row\">".concat(serie.id, "</th>\n    <td>").concat(serie.nombre, "</td>\n    <td>").concat(serie.network, "</td>\n    <td>").concat(serie.temporadas, "</td></tr>");
    serieTable.appendChild(tbodySerie);
}
var tempAvg = document.getElementById("avg");
// let clicked1: HTMLElement = document.getElementById(number)!;
// console.log(clicked1);
tempAvg.innerHTML = "Seasons average: ".concat(average(arrayTemporadas));
function average(arrayTemporadas) {
    var sum = 0;
    arrayTemporadas.forEach(function (temporada) {
        sum += temporada;
    });
    return sum / arrayTemporadas.length;
}
serieTable.click();
function initPage() {
    var serieTable = (document.getElementById("seriesTable"));
    var rows = serieTable.getElementsByTagName("tr");
    for (var i = 0; i < serieTable.rows.length; i++) {
        rows[i].addEventListener("click", function () {
            var clickedRow = this.rowIndex;
            var serie = hash.get(clickedRow);
            buildCard(serie);
        });
    }
}
initPage();
/*
<img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
    </div>
*/
function buildCard(serie) {
    var card = document.getElementById("card");
    card.innerHTML = "<img src=\"".concat(serie.imagen, "\" class=\"card-img-top\"> \n  <div class=\"card-body\">\n  <p class=\"card-text\"><h1>").concat(serie.nombre, "</h1></p>\n  <p class=\"card-text\">").concat(serie.descripcion, "</p>\n  <a href=\"url\">").concat(serie.streaming, "</a>");
}
