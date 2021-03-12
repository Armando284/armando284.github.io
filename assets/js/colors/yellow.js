import { Color } from "./color.js";

export class Yellow extends Color{

	white() {
		this.color = "White yellow";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(254, 255);
		//verde (rGb)
		this.rgb[1] = this.randomInt(235, 246);
		//azul (rgB)
		this.rgb[2] = this.randomInt(152, 207);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light yellow";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(253, 254);
		//verde (rGb)
		this.rgb[1] = this.randomInt(215, 235);
		//azul (rgB)
		this.rgb[2] = this.randomInt(1, 152);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated yellow";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(231, 253);
		//verde (rGb)
		this.rgb[1] = this.randomInt(192, 215);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 1);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark yellow";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(199, 231);
		//verde (rGb)
		this.rgb[1] = this.randomInt(166, 192);
		//azul (rgB)
		this.rgb[2] = this.randomInt(0, 1);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}