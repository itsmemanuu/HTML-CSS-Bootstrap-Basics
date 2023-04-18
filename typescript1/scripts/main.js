import { series } from "./data.js";
var serieTable = document.getElementById("seriesTable");
var arrayTemporadas = [];
series.forEach(function (serie) { mostrarSeries(serie); arrayTemporadas.push(serie.temporadas); });
function mostrarSeries(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr>\n    <th scope=\"row\">".concat(serie.id, "</th>\n    <td>").concat(serie.nombre, "</td>\n    <td>").concat(serie.network, "</td>\n    <td>").concat(serie.temporadas, "</td></tr>");
    serieTable.appendChild(tbodySerie);
}
var tempAvg = document.getElementById("avg");
tempAvg.innerHTML = "Seasons average: ".concat(average(arrayTemporadas));
function average(arrayTemporadas) {
    var sum = 0;
    arrayTemporadas.forEach(function (temporada) {
        sum += temporada;
    });
    return sum / arrayTemporadas.length;
}
