function getElementWidth(content, padding, border) {

	let content_1 = Number.parseFloat(content);
	let padding_1 = Number.parseFloat(padding);
	let border_1 = Number.parseFloat(border);

	return content_1 + padding_1 * 2 + border_1 * 2;


}




console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200