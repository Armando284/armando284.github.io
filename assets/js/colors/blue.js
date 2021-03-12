import { Color } from "./color.js";

export class Blue extends Color{

	white() {
		this.color = "White blue";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(135, 197);
		//verde (rGb)
		this.rgb[1] = this.randomInt(171, 213);
		//azul (rgB)
		this.rgb[2] = this.randomInt(219, 238);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light blue";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 135);
		//verde (rGb)
		this.rgb[1] = this.randomInt(103, 171);
		//azul (rgB)
		this.rgb[2] = this.randomInt(180, 219);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated blue";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 1);
		//verde (rGb)
		this.rgb[1] = this.randomInt(87, 103);
		//azul (rgB)
		this.rgb[2] = this.randomInt(154, 180);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark blue";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 1);
		//verde (rGb)
		this.rgb[1] = this.randomInt(72, 87);
		//azul (rgB)
		this.rgb[2] = this.randomInt(126, 154);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}