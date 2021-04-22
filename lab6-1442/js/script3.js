function anes(){

			var morning = [ "Math", "Physics", "Math", "Science", "Programming" ];
			var afternoon = [ "Programming", "Databases", "Web Development",
					"Networks", "Sport" ];
			var table = document.getElementById("table01_id");
			for (var i = 0; i < morning.length; i++) {
				var cell = table.rows[1].cells[i+1];
				cell.innerHTML = morning[i];
				if(i%2 == 1){
					cell.bgColor = "#ffcccc";
				}
			};
			for (var i = 0; i < afternoon.length; i++) {
				var cell = table.rows[2].cells[i+1];
				cell.innerHTML = afternoon[i];
				if(i%2 == 0){
					cell.bgColor = "#66ccff";
				}
			};
			
}