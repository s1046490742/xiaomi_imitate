$(document).ready(function(){
	$(".shoppingCart").mouseenter(function(){
		$(".shopContent").slideDown("fast");
	});
	$(".gouWuChe").mouseleave(function(){
		$(".shopContent").slideUp('fast');
	});
	
});