function CelToFah() {
	var ctemp = document.getElementById("tCel1_id").value;
	var ftemp = (ctemp * 1.8)+32;
	document.getElementById('tFah1_id').innerHTML = ftemp;
}