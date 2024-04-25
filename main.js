import { AUTOK } from "./adat.js";


function kartyaLetrehoz(lista){
    const kartyaELEMEK = $("article");

    lista.forEach(function(auto) {
        let kartya = `
            <div class="card col-lg-4">
                <div class="card-body">
                    <h3 class="card-title">${auto.marka}</h3>
                    <h5 class="card-text">${auto.tipus}</h5>
                </div>
            </div>
        `;
        kartyaELEMEK.innerHTML = kartya; 
    });
}
/*function letrehozTablazat() {
  const tablaELEM = document.getElementById("feladat_1");
  let tablazat = "<table>";
  for (let i = 0; i < GYUMOLCSOK.length; i++) {
    let sorok = "<tr>";
    for (const key in GYUMOLCSOK[i]) {
      sorok += `<td>${GYUMOLCSOK[i][key]}</td>`;
    }
    sorok += "</tr>";
    tablazat += sorok;
  }
  tablazat += "</table>";
  tablaELEM.innerHTML = tablazat;
} */


/*            <div class="card col-lg-4">
                <div class="card-header text-success"><strong>Túléltéltem még egy meetinget</strong></div>
                <div class="card-body">
                    <img src="kepek/polo2.jpg" class="img-thumbnail" alt="">
                    <button type="button" class="btn btn-secondary">S</button>
                    <button type="button" class="btn btn-secondary">M</button>
                    <button type="button" class="btn btn-secondary">L</button>
                    <button type="button" class="btn btn-secondary">XL</button>
                    <button type="button" class="btn btn-secondary">XXL</button>
                    <br> feugiat mauris sit amet orci hendrerit, vitae luctus odio iaculis. In volutpat turpis sit amet tellus ullamcorper luctus.
                </div>
                <div class="card-footer row">
                    <span class="col-lg-8">Ár: 6990 Ft</span>
                    <button type="button" class="btn btn-success col-lg-4">Kosárba</button>
                </div>
            </div>
*/