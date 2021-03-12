import { Color } from "./color.js";

export class Green extends Color{

	white() {
		this.color = "White green";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(171, 215);
		//verde (rGb)
		this.rgb[1] = this.randomInt(212, 233);
		//azul (rgB)
		this.rgb[2] = this.randomInt(154, 207);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light green";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(16, 171);
		//verde (rGb)
		this.rgb[1] = this.randomInt(169, 212);
		//azul (rgB)
		this.rgb[2] = this.randomInt(55, 154);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated green";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(16, 19);
		//verde (rGb)
		this.rgb[1] = this.randomInt(145, 169);
		//azul (rgB)
		this.rgb[2] = this.randomInt(46, 55);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark green";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(15, 16);
		//verde (rGb)
		this.rgb[1] = this.randomInt(120, 145);
		//azul (rgB)
		this.rgb[2] = this.randomInt(38, 46);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}