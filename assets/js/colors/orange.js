import { Color } from "./color.js";

export class Orange extends Color{

	white() {
		this.color = "White orange";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(254, 255);
		//verde (rGb)
		this.rgb[1] = this.randomInt(203, 230);
		//azul (rgB)
		this.rgb[2] = this.randomInt(143, 200);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light orange";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(247, 254);
		//verde (rGb)
		this.rgb[1] = this.randomInt(145, 203);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 143);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated orange";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(209, 247);
		//verde (rGb)
		this.rgb[1] = this.randomInt(125, 145);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 1);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark orange";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(170, 209);
		//verde (rGb)
		this.rgb[1] = this.randomInt(103, 125);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 1);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}