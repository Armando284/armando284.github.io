import { Color } from "./color.js";

export class Violet extends Color{

	white() {
		this.color = "White violet";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(166, 210);
		//verde (rGb)
		this.rgb[1] = this.randomInt(135, 195);
		//azul (rgB)
		this.rgb[2] = this.randomInt(192, 226);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light violet";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(91, 166);
		//verde (rGb)
		this.rgb[1] = this.randomInt(25, 135);
		//azul (rgB)
		this.rgb[2] = this.randomInt(131, 192);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated violet";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(78, 91);
		//verde (rGb)
		this.rgb[1] = this.randomInt(22, 25);
		//azul (rgB)
		this.rgb[2] = this.randomInt(113, 131);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark violet";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(65, 78);
		//verde (rGb)
		this.rgb[1] = this.randomInt(14, 22);
		//azul (rgB)
		this.rgb[2] = this.randomInt(91, 113);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}