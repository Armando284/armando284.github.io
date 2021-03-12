import { Color } from "./color.js";

export class Lime extends Color{

	white() {
		this.color = "White lime";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(220, 236);
		//verde (rGb)
		this.rgb[1] = this.randomInt(231, 242);
		//azul (rgB)
		this.rgb[2] = this.randomInt(155, 208);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light lime";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(178, 220);
		//verde (rGb)
		this.rgb[1] = this.randomInt(205, 231);
		//azul (rgB)
		this.rgb[2] = this.randomInt(12, 155);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated lime";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(153, 178);
		//verde (rGb)
		this.rgb[1] = this.randomInt(175, 205);
		//azul (rgB)
		this.rgb[2] = this.randomInt(12, 14);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark lime";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(123, 153);
		//verde (rGb)
		this.rgb[1] = this.randomInt(145, 175);
		//azul (rgB)
		this.rgb[2] = this.randomInt(11, 12);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}