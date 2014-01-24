function attach_progress_bar() {
	$('.remark-slide-number').css('display', 'none');
	$("body").append("<div id='remark-progress'></div>");
	var progress_bar = $("#remark-progress");
	var total_slides = parseInt($($('.remark-slide-number').get(0)).html().split(" / ")[1]);
	
	progress_bar.append('<div id="remark-progress-content"></div>')
	
	$(window).on("resize", function() {
		progress_bar.width($('.remark-visible .remark-slide-content').width());
		progress_bar.offset({top: $(document).height() - progress_bar.offset().height, left: $('.remark-visible .remark-slide-content').offset().left});
	});
	$(window).on("hashchange", function(){
		var current_slide = parseInt($('.remark-visible .remark-slide-number').html().split(" / ")[0]);
		$("#remark-progress-content").width((current_slide - 1) / (total_slides - 1) * 100 + "%");
	});
	
	$(window).trigger("resize");
	$(window).trigger("hashchange");
}