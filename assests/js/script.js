$(document).ready(function(){

	$('.carousel').carousel();
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	})


	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 9400) {
			$('.scrollToTop').fadeIn();
			$('.shareMemory').fadeOut();
		} else {
			$('.scrollToTop').fadeOut();
			$('.shareMemory').fadeIn();
		}
	});

	//Form navigation
	$('form.form-inline').submit(function(e){
		e.preventDefault();
		var inputId = $(this).find('input').val();
		var scrollToLink = "#year"+inputId;
		$('html,body').animate({
			scrollTop: $(scrollToLink).offset().top
		});
		$(this).find('input').val('');
	});
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#timeline').fadeIn();
		} else {
			$('#timeline').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	//Header scrollTo fnc
	$('.head-green-line span').on('click', function(){
		var link = $(this).data('original-title');
		var scrollToLink = "#year"+link;
		$('html,body').animate({
			scrollTop: $(scrollToLink).offset().top,
		});
	});
	
	//ScrollTo fnc
	$('#timeline a').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(link).offset().top
		});
	});
	
	//Tabs custom
	$('.tablist-sub li a').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		var el = $(link);
		$(this).parents('.tablist-sub').find('li').removeClass('active');
		$(this).parent('li').addClass('active');
		if(el){
			el.parent('.tab-content').find('.tab-pane').removeClass('active');
			el.addClass('active');
		}
	});
	// $('.nav-blue li:nth-child(2) a').on('click', function(){
	$('.main-nav li a').on('click', function(){
		var link = $(this).attr('href');
		var tabLink = $('.tab-content .tablist-sub li');
		var tabBlock = $('.tab-content .tab-pane');
		$(link).find(tabLink).each(function(){
			$(this).removeClass('active');
		});
		$(link).find(tabLink).first().addClass('active');
		$(link).find(tabBlock).each(function(){
			$(this).removeClass('active');
		});
		$(link).find(tabBlock).first().addClass('active');
	});

	$('.btn-number').on('click', function(){
		$(this).parent('.button-wrap').prev('.wrapper').find('.timeline2009-txt-wrap').addClass('hidden');
		$(this).parent('.button-wrap').prev('.wrapper').find('.hidden-wrap').removeClass('hidden');
	});

	$('.btn-timeLine').on('click', function(){
		$(this).parent('.button-wrap').prev('.wrapper').find('.timeline2009-txt-wrap').removeClass('hidden');
		$(this).parent('.button-wrap').prev('.wrapper').find('.hidden-wrap').addClass('hidden');
	});

	$('.left-pos button').on('click', function(){
		var link = $(this).data('link');
		$('.num-elev-block').each(function(){
			$(this).addClass('hidden');
		});
		$(link).removeClass('hidden');
	});
});