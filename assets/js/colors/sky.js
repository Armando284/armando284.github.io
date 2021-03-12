import { Color } from "./color.js";

export class Sky extends Color{

	white() {
		this.color = "White sky";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(132, 201);
		//verde (rGb)
		this.rgb[1] = this.randomInt(205, 230);
		//azul (rgB)
		this.rgb[2] = this.randomInt(211, 234);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light sky";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 132);
		//verde (rGb)
		this.rgb[1] = this.randomInt(156, 205);
		//azul (rgB)
		this.rgb[2] = this.randomInt(163, 211);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated sky";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 1);
		//verde (rGb)
		this.rgb[1] = this.randomInt(135, 156);
		//azul (rgB)
		this.rgb[2] = this.randomInt(141, 163);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark sky";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 1);
		//verde (rGb)
		this.rgb[1] = this.randomInt(111, 135);
		//azul (rgB)
		this.rgb[2] = this.randomInt(115, 141);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}