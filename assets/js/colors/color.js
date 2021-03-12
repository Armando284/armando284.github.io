export class Color {
	rgb;
	color;

	constructor(){
		this.rgb = [];
		this.color = "";
	}

	/*
	*	 Recives a minimun and maximun value.
	*  Returns a random int between in that range.
	*/
	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	white() {

	}

	light() {

	}

	sat() {

	}

	dark() {

	}
}