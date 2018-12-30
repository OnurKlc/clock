function hr() {
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let hourhand = document.querySelector(".hour");
	let hour = (h / 12) * 360 + 90 + (m / 2);
	hourhand.style.transform = `rotate(${hour}deg)`;
}

function mn() {
	let d = new Date();
	let m = d.getMinutes();
	let minutehand = document.querySelector(".minute");
	let minute = (m / 60) * 360 + 90;
	minutehand.style.transform = `rotate(${minute}deg)`;
}

function scn() {
	let d = new Date();
	let s = d.getSeconds();
	let second = (s / 60) * 360 + 90;
	let secondhand = document.querySelector(".second");
	secondhand.style.transform = `rotate(${second}deg)`;
}

setInterval(scn, 1000);
setInterval(hr, 1000);
setInterval(mn, 1000);