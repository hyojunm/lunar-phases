$(document).ready(function(){
  $("#rightarrow").click(function() {
  	phaseChangeIncrease();
  });

  $("#leftarrow").click(function() {
  	phaseChangeDecrease();
  });
});

var phase = 1;

function phaseChangeIncrease() {
	$("#phase" + phase).fadeOut(1000);
	$("#phase" + phase + "info").fadeOut(1000);
	phase = phase + 1;

	if (phase == 9) {
		phase = 1;
	}

	$("#phase" + phase).fadeIn(1000);
	$("#phase" + phase + "info").fadeIn(1000);
}

function phaseChangeDecrease() {
	$("#phase" + phase).fadeOut(1000);
	$("#phase" + phase + "info").fadeOut(1000);
	phase = phase - 1;

	if (phase == 0) {
		phase = 8;
	}

	$("#phase" + phase).fadeIn(1000);
	$("#phase" + phase + "info").fadeIn(1000);
}