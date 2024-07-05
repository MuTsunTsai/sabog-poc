
addEventListener("message", event => {
	const buffer = event.data;
	const array = new Uint8Array(buffer);
	array[0] = 100;
	console.log("Worker writing 100 to the buffer");
	postMessage("ok");
});