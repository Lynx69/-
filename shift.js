function save(point) {
	var key = document.getElementById("name").value;
	var point = document.getElementById(option).value;
	localStorage.setItem(name,point);
	updateTable();
}
function start()
{
var option = localStorage.getItem("key",);
if(option == "day")
	{
		style1();
		localStorage.setItem("key","night");
	}
else if (option == "night")
{
	style2();
	localStorage.setItem("key","day");
	
}
else
{

	style2();
	localStorage.setItem("key","night");
}
}
function style2()
{
		var shift_css = document.createElement('link');
		shift_css.rel = 'stylesheet';
		shift_css.href = 'style2.css'; // здесь указывается URL стилевого файла
		shift_css.type = 'text/css';
		document.head.appendChild(shift_css);
}

function style1()
{
		var shift_css = document.createElement('link');
		shift_css.rel = 'stylesheet';
		shift_css.href = 'style1.css'; // здесь указывается URL стилевого файла
		shift_css.type = 'text/css';
		document.head.appendChild(shift_css);
}
	
