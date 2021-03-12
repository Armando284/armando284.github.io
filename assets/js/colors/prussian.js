import { Color } from "./color.js";

export class Prussian extends Color{

	white() {
		this.color = "White prussian";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(143, 210);
		//verde (rGb)
		this.rgb[1] = this.randomInt(156, 210);
		//azul (rgB)
		this.rgb[2] = this.randomInt(201, 236);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	light() {
		this.color = "Light prussian";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 143);
		//verde (rGb)
		this.rgb[1] = this.randomInt(77, 156);
		//azul (rgB)
		this.rgb[2] = this.randomInt(159, 201);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	sat() {
		this.color = "Saturated prussian";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 1);
		//verde (rGb)
		this.rgb[1] = this.randomInt(65, 77);
		//azul (rgB)
		this.rgb[2] = this.randomInt(137, 159);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

	dark() {
		this.color = "Dark prussian";
		//rojo (Rgb)
		this.rgb[0] = this.randomInt(0, 1);
		//verde (rGb)
		this.rgb[1] = this.randomInt(53, 65);
		//azul (rgB)
		this.rgb[2] = this.randomInt(113, 137);

		return {
			color: this.color,
			rgb: this.rgb
		};
	}

}