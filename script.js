function time() {
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();

	let hourhand = document.querySelector(".hour");
	let hour = (h / 12) * 360 + 90 + (m / 2);
	hourhand.style.transform = `rotate(${hour}deg)`;

	let minutehand = document.querySelector(".minute");
	let minute = (m / 60) * 360 + 90;
	minutehand.style.transform = `rotate(${minute}deg)`;

	let second = (s / 60) * 360 + 90;
	let secondhand = document.querySelector(".second");
	secondhand.style.transform = `rotate(${second}deg)`;
}

window.addEventListener("load", time);

setInterval(time, 1000);
