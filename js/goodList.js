$(document).ready(function(){
	$("#btn_left_id").click(function(){
		$("#goodList_id").css("left","0px");
		$("#btn_left_id").css("color","rgb(224,224,224)");
		$("#btn_rigth_id").css("color","rgb(176,176,176)");
	});
});
$(document).ready(function(){
	$("#btn_rigth_id").click(function(){
		$("#goodList_id").css("left","-1226px");
		$("#btn_rigth_id").css("color","rgb(224,224,224)");
		$("#btn_left_id").css("color","rgb(176,176,176)");
	});
});
$(document).ready(function(){
	
	for(var i=1;i<=10;i++){
		var color = $("#goodDiv"+i).attr("data-color");
		$("#goodDiv"+i).css("border-top-color",color)
	}
});
