import { Color } from "./color.js";

export class Red extends Color{

	white() {
		this.color = "White red";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(246, 251);
		//verde (rGb)
		this.rgb[1] = this.randomInt(152, 207);
		//azul (rgB)
		this.rgb[2] = this.randomInt(140, 198);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light red";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(232, 246);
		//verde (rGb)
		this.rgb[1] = this.randomInt(0, 152);
		//azul (rgB)
		this.rgb[2] = this.randomInt(48, 140);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated red";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(196, 232);
		//verde (rGb)
		this.rgb[1] = this.randomInt(0, 1);
		//azul (rgB)
		this.rgb[2] = this.randomInt(40, 48);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark red";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(159, 196);
		//verde (rGb)
		this.rgb[1] = this.randomInt(0, 1);
		//azul (rgB)
		this.rgb[2] = this.randomInt(30, 40);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}