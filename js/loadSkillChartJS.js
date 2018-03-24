function loadSkillChart () {
	var skillData = {
		labels: ["Front-end Web", "Back-end Web", "Database", "Generic", "Others", "Data Modelling"],
		datasets: [{
			fill: true,
			backgroundColor: "rgba(51,122,183,0.2)",
			borderColor: "rgba(51,122,183,1)",
			pointBackgroundColor: "rgba(51,122,183,1)",
			pointBorderColor: "#fff",
			data: [78,74,43,23,35,55]
		}]
	};
	
	var skillOptions = {
		title: {
			display: true,
			text: 'Skills Confidence Percentage %'
		},
		legend: {
            display: false
		},
		scale: {
			ticks: {
				min: 0,
				max: 100,
				maxTicksLimit: 5
				//, display: false
			}
		}/*,
		pieceLabel: {
			render: 'label',
			overlap: true,
			position: 'outside'
		}*/
	};
	
	var ctx = document.getElementById("skillChart");
	var skillChart = new Chart(ctx, {
		type: 'radar',
		data: skillData,
		options: skillOptions
	});
	
}
window.addEventListener("load", function(){	loadSkillChart(); });
