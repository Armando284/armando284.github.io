import { Color } from "./color.js";

export class Ochre extends Color{

	white() {
		this.color = "White ochre";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(254, 255);
		//verde (rGb)
		this.rgb[1] = this.randomInt(221, 239);
		//azul (rgB)
		this.rgb[2] = this.randomInt(147, 205);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light ochre";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(254, 255);
		//verde (rGb)
		this.rgb[1] = this.randomInt(186, 221);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 147);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated ochre";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(215, 254);
		//verde (rGb)
		this.rgb[1] = this.randomInt(159, 186);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 1);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark ochre";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(186, 215);
		//verde (rGb)
		this.rgb[1] = this.randomInt(139, 159);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 1);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}