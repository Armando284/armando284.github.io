import { PaletteMaker } from "./palette_maker.js";

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const MONO = document.querySelector("#mono");
const LOL = document.querySelector("#lol");
const COMP = document.querySelector("#comp");
const TRIAD = document.querySelector("#triad");
const WEB = document.querySelector("#web");

let select = document.getElementById('color-picker');
let sC = document.querySelector("#selected_color");
let y = document.querySelector("#color").value;
select.addEventListener("click", (e) => {
  sC.style.color = e.target.style.color;
  y = e.target.id;
});

let SIZE = document.querySelector("#size");

const CONTAINER = document.querySelector("#container");
const PALETTE = new PaletteMaker();

MONO.addEventListener("click", () => {
  let x = parseInt(SIZE.value);
  if (!isNaN(x) && x > 0) {
    CONTAINER.innerHTML = "";
    let html = "";
    setTimeout(() => {
      for (let i = 0; i < x; i++) {
        let color = monochrome(i, y);
        html += `<div name="sample" class="col-1 text-light font-weight-light text-center" style="width: 50px; height: 50px; background-color: ${color.color};"><small>${color.order}</small></div>`;
      }
      CONTAINER.innerHTML = `
      <div class="col-12 rounded bg-white py-3 px-2 mb-2 sample animated fadeIn" onclick="monoPaletteCSS()">
        <h6 class="text-dark font-weight-light">Monochromatic color palettes are simple and dont stand out easy, but can achieve amazing results if used right.</h6>
        <br />
        <small class="font-italic text-weight-lighter pb-2">Click to download css</small>
        <div class="row mx-0 justify-content-center">
          ${html}
        </div>
      </div>`;
    }, 50);
  } else {
    alert("The given value must be a number bigger than 0");
  }
  SIZE.value = "";
});

LOL.addEventListener("click", () => {
  let x = parseInt(SIZE.value);
  if (!isNaN(x) && x > 0) {
    CONTAINER.innerHTML = "";
    let html = "";
    setTimeout(() => {
      for (let i = 0; i < x; i++) {
        let color = analogous(i, y);
        html += `<div name="sample" class="col-1 text-light font-weight-light text-center" style="width: 50px; height: 50px; background-color: ${color.color};"><small>${color.order}</small></div>`;
      }
      CONTAINER.innerHTML = `
      <div class="col-12 rounded bg-white py-3 px-2 mb-2 sample animated fadeIn" onclick="lolPaletteCSS()">
        <h6 class="text-dark font-weight-light">Analogous color palettes are very easy to use, enjoy.</h6>
        <br />
        <small class="font-italic text-weight-lighter pb-2">Click to download css</small>
        <div class="row mx-0 justify-content-center">
          ${html}
        </div>
      </div>`;
    }, 50);
  } else {
    alert("The given value must be a number bigger than 0");
  }
  SIZE.value = "";
});

COMP.addEventListener("click", () => {
  let x = parseInt(SIZE.value);
  if (!isNaN(x) && x > 0) {
    CONTAINER.innerHTML = "";
    let html = "";
    setTimeout(() => {
      for (let i = 0; i < x; i++) {
        let color = complementary(i);
        html += `<div name="sample" class="col-1 text-light font-weight-light text-center" style="width: 50px; height: 50px; background-color: ${color.color};"><small>${color.order}</small></div>`;
      }
      CONTAINER.innerHTML = `
      <div class="col-12 rounded bg-white py-3 px-2 mb-2 sample animated fadeIn" onclick="compPaletteCSS()">
        <h6 class="text-dark font-weight-light">Complementary color palettes are meant to work in couples, this method was created to generate colors for charts with a dinamic amount of values.</h6>
        <br />
        <small class="font-italic text-weight-lighter pb-2">Click to download css</small>
        <div class="row mx-0 justify-content-center">
          ${html}
        </div>
      </div>`;
    }, 50);
  } else {
    alert("The given value must be a number bigger than 0");
  }
  SIZE.value = "";
});

TRIAD.addEventListener("click", () => {
  let x = parseInt(SIZE.value);
  if (!isNaN(x) && x > 0) {
    CONTAINER.innerHTML = "";
    let html = "";
    setTimeout(() => {
      for (let i = 0; i < x; i++) {
        let color = triad(i, y);
        html += `<div name="sample" class="col-1 text-light font-weight-light text-center" style="width: 50px; height: 50px; background-color: ${color.color};"><small>${color.order}</small></div>`;
      }
      CONTAINER.innerHTML = `
        <div class="col-12 rounded bg-white py-3 px-2 mb-2 sample animated fadeIn" onclick="triadPaletteCSS()">
          <h6 class="text-dark font-weight-light">Triad color palettes are dificult to mix, make sure the colors match correctly before using it.</h6>
          <br />
          <small class="font-italic text-weight-lighter pb-2">Click to download css</small>
          <div class="row mx-0 justify-content-center">
            ${html}
          </div>
        </div>`;
    }, 50);
  } else {
    alert("The given value must be a number bigger than 0");
  }
  SIZE.value = "";
});

WEB.addEventListener("click", () => {
  let x = parseInt(SIZE.value);
  if (!isNaN(x) && x > 0) {
    CONTAINER.innerHTML = null;
    setTimeout(() => {
      for (let i = 0; i < x; i++) {
        let color = web(i, y);
        let a = color.color.a;
        let b = color.color.b;
        let c = color.color.c;
        let d = color.color.d;
        let e = color.color.e;
        CONTAINER.innerHTML += `
								<div class="col-md-3 mx-1 rounded bg-white py-3 px-2 mb-2 sample animated fadeIn fast" onclick="webPaletteCSS('${ a }','${ b }','${ c }','${ d }','${ e }')">
                  <small class="font-italic text-weight-lighter pb-2">Click to download css</small>
									<div class="row mx-0 justify-content-center">
										<div data-toggle="tooltip" data-placement="top" title="${ a }" class="col-sm-2 rounded-left" style="background: ${ a }; min-height: 50px;">
											<small class="text-light">1</small>
										</div>
										<div data-toggle="tooltip" data-placement="top" title="${ b }" class="col-sm-2" style="background: ${ b }; min-height: 50px;">
											<small class="text-light">2</small>
										</div>
										<div data-toggle="tooltip" data-placement="top" title="${ c }" class="col-sm-2" style="background: ${ c }; min-height: 50px;">
											<small class="text-light">3</small>
										</div>
										<div data-toggle="tooltip" data-placement="top" title="${ d }" class="col-sm-2" style="background: ${ d }; min-height: 50px;">
											<small class="text-dark">4</small>
										</div>
										<div data-toggle="tooltip" data-placement="top" title="${ e }" class="col-sm-2 rounded-right" style="background: ${ e }; min-height: 50px;">
											<small class="text-dark">5</small>
										</div>
									</div>
								</div>`;
      }
    }, 50);
  } else {
    alert("The given value must be a number bigger than 0");
  }
  SIZE.value = "";
});

function monochrome(index, tone) {
  return PALETTE.monochrome(index, tone);
}

function analogous(index, tone) {
  return PALETTE.analogous(index, tone);
}

/* Recive el indice del arreglo para generar el color complementario correcto.
 *  Devuelve el codigo html del color correspondiente siempre complementario con su color anterior y posterior
 */
function complementary(index) {
  return PALETTE.complementary(index);
}

function triad(index, tone) {
  return PALETTE.triad(index, tone);
}

function web(index, tone) {
  return PALETTE.web(index, tone);
}

let copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  let copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
