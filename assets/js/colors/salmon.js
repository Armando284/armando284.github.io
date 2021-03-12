import { Color } from "./color.js";

export class Salmon extends Color{

	white() {
		this.color = "White salmon";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(252, 255);
		//verde (rGb)
		this.rgb[1] = this.randomInt(184, 222);
		//azul (rgB)
		this.rgb[2] = this.randomInt(135, 195);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light salmon";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(240, 252);
		//verde (rGb)
		this.rgb[1] = this.randomInt(99, 184);
		//azul (rgB)
		this.rgb[2] = this.randomInt(19, 135);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated salmon";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(204, 240);
		//verde (rGb)
		this.rgb[1] = this.randomInt(86, 99);
		//azul (rgB)
		this.rgb[2] = this.randomInt(12, 19);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark salmon";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(165, 204);
		//verde (rGb)
		this.rgb[1] = this.randomInt(71, 86);
		//azul (rgB)
		this.rgb[2] = this.randomInt(7, 12);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}