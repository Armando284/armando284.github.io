import { Color } from "./color.js";

export class Pink extends Color{

	white() {
		this.color = "White pink";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(211, 230);
		//verde (rGb)
		this.rgb[1] = this.randomInt(144, 202);
		//azul (rgB)
		this.rgb[2] = this.randomInt(195, 227);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light pink";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(169, 211);
		//verde (rGb)
		this.rgb[1] = this.randomInt(0, 144);
		//azul (rgB)
		this.rgb[2] = this.randomInt(129, 195);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated pink";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(144, 169);
		//verde (rGb)
		this.rgb[1] = this.randomInt(0, 1);
		//azul (rgB)
		this.rgb[2] = this.randomInt(111, 129);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark pink";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(119, 144);
		//verde (rGb)
		this.rgb[1] = this.randomInt(0, 1);
		//azul (rgB)
		this.rgb[2] = this.randomInt(90, 111);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}