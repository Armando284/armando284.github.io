function downloader(text, file) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8, '+encodeURIComponent(text));
	element.setAttribute('download', file);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function monoPaletteCSS() {
	let file = 'custom_monochromatic_palette.css';
	let text =
`/*
* The letter c on the classes goes for custom and its meant to avoid conflicts with bootstrap classes.
* Since the amount of colors are dinamic, class names will also be generated, change them to your like for convinience.
*
*/
`;
	let colors = document.getElementsByName('sample');
	for (let i = 0; i < colors.length; i++) {
		text += `

.color-${ i } {
	color: ${ colors[i].style.backgroundColor };
}`;
	}
	downloader(text, file);
}

function lolPaletteCSS() {
	let file = 'custom_analogous_palette.css';
	let text =
`/*
* The letter c on the classes goes for custom and its meant to avoid conflicts with bootstrap classes.
* Since the amount of colors are dinamic, class names will also be generated, change them to your like for convinience.
*
*/
`;
	let colors = document.getElementsByName('sample');
	for (let i = 0; i < colors.length; i++) {
		text += `

.color-${ i } {
	color: ${ colors[i].style.backgroundColor };
}`;
	}
	downloader(text, file);
}

function compPaletteCSS() {
	let file = 'custom_complementary_palette.css';
	let text =
`/*
* The letter c on the classes goes for custom and its meant to avoid conflicts with bootstrap classes.
* Since the amount of colors are dinamic, class names will also be generated, change them to your like for convinience.
*
*/
`;
	let colors = document.getElementsByName('sample');
	for (let i = 0; i < colors.length; i++) {
		text += `

.color-${ i } {
	color: ${ colors[i].style.backgroundColor };
}`;
	}
	downloader(text, file);
}

function triadPaletteCSS() {
	let file = 'custom_triad_palette.css';
	let text =
`/*
* The letter c on the classes goes for custom and its meant to avoid conflicts with bootstrap classes.
* Since the amount of colors are dinamic, class names will also be generated, change them to your like for convinience.
*/
`;
	let colors = document.getElementsByName('sample');
	for (let i = 0; i < colors.length; i++) {
		text += `

.color-${ i } {
	color: ${ colors[i].style.backgroundColor };
}`;
	}
	downloader(text, file);
}

function webPaletteCSS(a, b, c, d, e) {
	let file = 'custom_web_palette.css';
	let text =
`/*
* The letter c on the classes goes for custom and its meant to avoid conflicts with bootstrap classes.
*/

.c-text-primary {
	/* primary color */
	color: ${ a };
}

.c-text-secondary {
	/* secondary color */
	color: ${ b };
}

/* complementary background colors */
.c-bg-dark {
	background-color: ${ c };
}

.c-bg-secondary {
	background-color: ${ d };
}

.c-bg-light {
	background-color: ${ e };
}
	`;
	downloader(text, file);
}

