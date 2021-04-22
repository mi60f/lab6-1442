function convertC(){
	var ftemp = document.getElementById("tFah_id").value;
	var ctemp = (ftemp - 32)*5/9;
	document.getElementById('tCel_id').innerHTML = ctemp;
}