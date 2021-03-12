import { Red } from "./colors/red.js";
import { Blue } from "./colors/blue.js";
import { Yellow } from "./colors/yellow.js";
import { Green } from "./colors/green.js";
import { Lime } from "./colors/lime.js";
import { Ochre } from "./colors/ochre.js";
import { Orange } from "./colors/orange.js";
import { Pink } from "./colors/pink.js";
import { Prussian } from "./colors/prussian.js";
import { Salmon } from "./colors/salmon.js";
import { Sky } from "./colors/sky.js";
import { Violet } from "./colors/violet.js";

export class PaletteMaker {
  RED;
  BLUE;
  YELLOW;
  GREEN;
  LIME;
  OCHRE;
  ORANGE;
  PINK;
  PRUSSIAN;
  SALMON;
  SKY;
  VIOLET;
  constructor() {
    this.RED = new Red();
    this.BLUE = new Blue();
    this.YELLOW = new Yellow();
    this.GREEN = new Green();
    this.LIME = new Lime();
    this.OCHRE = new Ochre();
    this.ORANGE = new Orange();
    this.PINK = new Pink();
    this.PRUSSIAN = new Prussian();
    this.SALMON = new Salmon();
    this.SKY = new Sky();
    this.VIOLET = new Violet();
  }

  RGBtoHTML(rgb) {
    let html = "#";
    for (let i = 0; i < 3; i++) {
      if (rgb[i] < 16) {
        html = `${html}0${rgb[i].toString(16)}`;
      } else {
        html = `${html}${rgb[i].toString(16)}`;
      }
    }
    return html;
  }

  monochrome(index, tone) {
    let color = "";
    let orden = 0;
    let x = this.RED;
    if (tone === "blue") {
      x = this.BLUE;
    } else if (tone === "green") {
      x = this.GREEN;
    } else if (tone === "lime") {
      x = this.LIME;
    } else if (tone === "ochre") {
      x = this.OCHRE;
    } else if (tone === "orange") {
      x = this.ORANGE;
    } else if (tone === "pink") {
      x = this.PINK;
    } else if (tone === "prussian") {
      x = this.PRUSSIAN;
    } else if (tone === "red") {
      x = this.RED;
    } else if (tone === "salmon") {
      x = this.SALMON;
    } else if (tone === "sky") {
      x = this.SKY;
    } else if (tone === "violet") {
      x = this.VIOLET;
    } else if (tone === "yellow") {
      x = this.YELLOW;
    }
    if (index == 0 || index % 4 == 0) {
      //Rojo oscuro
      color = this.RGBtoHTML(x.dark().rgb);
      orden = 1;
    } else if (index % 4 == 1) {
      //Rojo saturado
      color = this.RGBtoHTML(x.sat().rgb);
      orden = 2;
    } else if (index % 4 == 2) {
      //Rojo claro
      color = this.RGBtoHTML(x.light().rgb);
      orden = 3;
    } else if (index % 4 == 3) {
      //Rojo blanco
      color = this.RGBtoHTML(x.white().rgb);
      orden = 4;
    }
    return {
      color: color,
      order: orden,
    };
  }

  analogous(index, tone) {
    let color = "";
    let orden = 0;
    let x = this.RED;
    let y = this.PINK;
    let z = this.VIOLET;
    if (tone === "blue" || tone === "prussian" || tone === "sky") {
      x = this.PRUSSIAN;
      y = this.BLUE;
      z = this.SKY;
    } else if (tone === "green" || tone === "lime" || tone === "yellow") {
      x = this.GREEN;
      y = this.LIME;
      z = this.YELLOW;
    } else if (tone === "ochre" || tone === "orange" || tone === "salmon") {
      x = this.OCHRE;
      y = this.ORANGE;
      z = this.SALMON;
    } else if (tone === "pink" || tone === "red" || tone === "violet") {
      x = this.RED;
      y = this.PINK;
      z = this.VIOLET;
    }
    if (index == 0 || index % 12 == 0) {
      //Color oscuro
      color = this.RGBtoHTML(x.dark().rgb);
      orden = 1;
    } else if (index % 12 == 1) {
      //Color saturado
      color = this.RGBtoHTML(x.sat().rgb);
      orden = 2;
    } else if (index % 12 == 2) {
      //Color claro
      color = this.RGBtoHTML(x.light().rgb);
      orden = 3;
    } else if (index % 12 == 3) {
      //Color blanco
      color = this.RGBtoHTML(x.white().rgb);
      orden = 4;
    } else if (index % 12 == 4) {
      //Color oscuro
      color = this.RGBtoHTML(y.dark().rgb);
      orden = 5;
    } else if (index % 12 == 5) {
      //Color saturado
      color = this.RGBtoHTML(y.sat().rgb);
      orden = 6;
    } else if (index % 12 == 6) {
      //Color claro
      color = this.RGBtoHTML(y.light().rgb);
      orden = 7;
    } else if (index % 12 == 7) {
      //Color blanco
      color = this.RGBtoHTML(y.white().rgb);
      orden = 8;
    } else if (index % 12 == 8) {
      //Color oscuro
      color = this.RGBtoHTML(z.dark().rgb);
      orden = 9;
    } else if (index % 12 == 9) {
      //Color saturado
      color = this.RGBtoHTML(z.sat().rgb);
      orden = 10;
    } else if (index % 12 == 10) {
      //Color claro
      color = this.RGBtoHTML(z.light().rgb);
      orden = 11;
    } else if (index % 12 == 11) {
      //Color blanco
      color = this.RGBtoHTML(z.white().rgb);
      orden = 12;
    }
    return {
      color: color,
      order: orden,
    };
  }

  complementary(index) {
    let color = "";
    let orden = 0;
    if (index == 0 || index % 12 == 0) {
      //Rojo saturado
      color = this.RGBtoHTML(this.RED.sat().rgb);
      orden = 1;
    } else if (index % 12 == 1) {
      //Verde no saturado
      color = this.RGBtoHTML(this.GREEN.dark().rgb);
      orden = 2;
    } else if (index % 12 == 2) {
      //Azul saturado
      color = this.RGBtoHTML(this.BLUE.sat().rgb);
      orden = 3;
    } else if (index % 12 == 3) {
      //Naranja no saturado
      color = this.RGBtoHTML(this.ORANGE.dark().rgb);
      orden = 4;
    } else if (index % 12 == 4) {
      //Amarillo saturado
      color = this.RGBtoHTML(this.YELLOW.sat().rgb);
      orden = 5;
    } else if (index % 12 == 5) {
      //Violeta no saturado
      color = this.RGBtoHTML(this.VIOLET.dark().rgb);
      orden = 6;
    } else if (index % 12 == 6) {
      //Verde-lima saturado
      color = this.RGBtoHTML(this.LIME.sat().rgb);
      orden = 7;
    } else if (index % 12 == 7) {
      //Morado no saturado
      color = this.RGBtoHTML(this.PINK.dark().rgb);
      orden = 8;
    } else if (index % 12 == 8) {
      //Ocre saturado
      color = this.RGBtoHTML(this.OCHRE.sat().rgb);
      orden = 9;
    } else if (index % 12 == 9) {
      //Prusia no saturado
      color = this.RGBtoHTML(this.PRUSSIAN.dark().rgb);
      orden = 10;
    } else if (index % 12 == 10) {
      //Salmon saturado
      color = this.RGBtoHTML(this.SALMON.sat().rgb);
      orden = 11;
    } else if (index % 12 == 11) {
      //Azul-cielo no saturado
      color = this.RGBtoHTML(this.SKY.dark().rgb);
      orden = 12;
    }
    return {
      color: color,
      order: orden,
    };
  }

  triad(index, tone) {
    let color = "";
    let orden = 0;
    let x = this.RED;
    let y = this.BLUE;
    let z = this.YELLOW;
    if (tone === "blue" || tone === "red" || tone === "yellow") {
      x = this.RED;
      y = this.BLUE;
      z = this.YELLOW;
    } else if (tone === "green" || tone === "violet" || tone === "orange") {
      x = this.GREEN;
      y = this.VIOLET;
      z = this.ORANGE;
    } else if (tone === "lime" || tone === "prussian" || tone === "salmon") {
      x = this.LIME;
      y = this.PRUSSIAN;
      z = this.SALMON;
    } else if (tone === "pink" || tone === "sky" || tone === "ochre") {
      x = this.SKY;
      y = this.PINK;
      z = this.OCHRE;
    }
    if (index == 0 || index % 12 == 0) {
      //Color oscuro
      color = this.RGBtoHTML(x.dark().rgb);
      orden = 1;
    } else if (index % 12 == 1) {
      //Color saturado
      color = this.RGBtoHTML(x.sat().rgb);
      orden = 2;
    } else if (index % 12 == 2) {
      //Color claro
      color = this.RGBtoHTML(x.light().rgb);
      orden = 3;
    } else if (index % 12 == 3) {
      //Color blanco
      color = this.RGBtoHTML(x.white().rgb);
      orden = 4;
    } else if (index % 12 == 4) {
      //Color oscuro
      color = this.RGBtoHTML(y.dark().rgb);
      orden = 5;
    } else if (index % 12 == 5) {
      //Color saturado
      color = this.RGBtoHTML(y.sat().rgb);
      orden = 6;
    } else if (index % 12 == 6) {
      //Color claro
      color = this.RGBtoHTML(y.light().rgb);
      orden = 7;
    } else if (index % 12 == 7) {
      //Color blanco
      color = this.RGBtoHTML(y.white().rgb);
      orden = 8;
    } else if (index % 12 == 8) {
      //Color oscuro
      color = this.RGBtoHTML(z.dark().rgb);
      orden = 9;
    } else if (index % 12 == 9) {
      //Color saturado
      color = this.RGBtoHTML(z.sat().rgb);
      orden = 10;
    } else if (index % 12 == 10) {
      //Color claro
      color = this.RGBtoHTML(z.light().rgb);
      orden = 11;
    } else if (index % 12 == 11) {
      //Color blanco
      color = this.RGBtoHTML(z.white().rgb);
      orden = 12;
    }
    return {
      color: color,
      order: orden,
    };
  }

  web(index, tone) {
    let color = {};
    let orden = 0;
    let x = this.RED;
    let y = this.BLUE;
    let z = this.YELLOW;
    if (tone === "blue" || tone === "red" || tone === "yellow") {
      x = this.RED;
      y = this.BLUE;
      z = this.YELLOW;
    } else if (tone === "green" || tone === "violet" || tone === "orange") {
      x = this.GREEN;
      y = this.VIOLET;
      z = this.ORANGE;
    } else if (tone === "lime" || tone === "prussian" || tone === "salmon") {
      x = this.LIME;
      y = this.PRUSSIAN;
      z = this.SALMON;
    } else if (tone === "pink" || tone === "sky" || tone === "ochre") {
      x = this.SKY;
      y = this.PINK;
      z = this.OCHRE;
    }
    if (index == 0 || index % 4 == 0) {
      //Color oscuro
      color = {
        a: this.RGBtoHTML(x.sat().rgb),
        b: this.RGBtoHTML(y.dark().rgb),
        c: this.RGBtoHTML(z.sat().rgb),
        d: this.RGBtoHTML(z.light().rgb),
        e: this.RGBtoHTML(z.white().rgb),
      };
      orden = 1;
    } else if (index % 4 == 1) {
      //Color saturado
      color = {
        a: this.RGBtoHTML(x.dark().rgb),
        b: this.RGBtoHTML(y.sat().rgb),
        c: this.RGBtoHTML(z.sat().rgb),
        d: this.RGBtoHTML(z.light().rgb),
        e: this.RGBtoHTML(z.white().rgb),
      };
      orden = 2;
    } else if (index % 4 == 2) {
      //Color claro
      color = {
        a: this.RGBtoHTML(z.sat().rgb),
        b: this.RGBtoHTML(y.dark().rgb),
        c: this.RGBtoHTML(x.sat().rgb),
        d: this.RGBtoHTML(x.light().rgb),
        e: this.RGBtoHTML(x.white().rgb),
      };
      orden = 3;
    } else if (index % 4 == 3) {
      //Color blanco
      color = {
        a: this.RGBtoHTML(x.sat().rgb),
        b: this.RGBtoHTML(z.dark().rgb),
        c: this.RGBtoHTML(y.sat().rgb),
        d: this.RGBtoHTML(y.light().rgb),
        e: this.RGBtoHTML(y.white().rgb),
      };
      orden = 4;
    }
    return {
      color: color,
      order: orden,
    };
  }
}
