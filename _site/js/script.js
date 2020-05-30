$ = jQuery;

$(window).on('scroll', function ()
{

});

;(function ($, window, document, undefined)
{
	$.fn.doubleTapToGo = function (params)
	{
		if (!( 'ontouchstart' in window ) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;
		
		this.each(function ()
		{
			var curItem = false;
			
			$(this).on('click', function (e)
			{
				var item = $(this);
				if (item[0] != curItem[0])
				{
					e.preventDefault();
					curItem = item;
				}
			});
			
			$(document).on('click touchstart MSPointerDown', function (e)
			{
				var resetItem = true,
				    parents   = $(e.target).parents();
				
				for (var i = 0; i < parents.length; i++)
					if (parents[i] == curItem[0])
						resetItem = false;
				
				if (resetItem)
					curItem = false;
			});
		});
		return this;
	};
	
	var owl = $('.b-foodContainer-slider');
	owl.owlCarousel({
		loop           : true,
		autoplay       : true,
		autoplayTimeout: 2000,
		smartSpeed     : 700,
		nav            : true,
		items          : 4,
		margin         : 0,
		navText        : [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
	});
	
	$('a[href^="#"]').click(function ()
	{
		if (document.getElementById($(this).attr('href').substr(1)) != null)
		{
			$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
		}
		return false;
	});
	if (jQuery('body').width() > 1200)
	{
		var s = skrollr.init();
		
	}
	
	if (jQuery('body').width() < 768)
	{
	
	}
	else
	{
		if ($('section').hasClass('homepage_section'))
		{
			var get_offset_container = $('.container').offset().left;
			
			var get_height = $('.b-blockStyle__1').height();
			
			$('.b-blockStyle__1').each(function ()
			{
				var get_offset_w = $(this).offset().top;
				var get_text     = $(this).attr('data-title');
				var get_eq       = $(this).index();
				var set_procent  = 25 * get_eq;
				
				$(window).on('scroll', function ()
				{
					
					// 					if ($(window).scrollTop() > get_offset_w - 200)
					// 					{
					// 						$('.b-progresbarSection__text').text(get_text);
					// 						$('.b-progresbarSection__bar span').css({'height': set_procent + '%'});
					// 					}
				});
			});
			
			$('.b-progresbarSection').css({'left': get_offset_container + 30 + 'px'});
		}
	}
	
	$('.b-openMenu a').click(function ()
	{
		$('.b-headerFixed').fadeToggle(500);
		return false;
		
	});
	
	$('.close_nav').click(function ()
	{
		$('.b-headerFixed').fadeToggle(500);
		return false;
	});
	
	setInterval(function ()
	{
		$('tspan').hide();
	}, 500);
	
	
	

	
	$('.diagrammOne .b-listsDetail__item').click(function ()
	{
		var get_data = $(this).attr('data-tab');
		$('.diagrammOne .tab_container').addClass('no-active_tab');
		$('.diagrammOne #' + get_data).removeClass('no-active_tab');
		
		if ($(this).hasClass('active'))
		{
		
		}
		else
		{
			var prev_get_chart      = $('.diagrammOne .b-listsDetail__item.active').attr('data-chart');
			var prev_get_slice      = $('.diagrammOne .b-listsDetail__item.active').attr('data-slice');
			var prev_get_sliceTotal = parseInt(prev_get_slice);
			
			if (prev_get_chart == '1')
			{
				chart1.clickSlice(prev_get_sliceTotal);
			}
			
			if (prev_get_chart == '2')
			{
				chart2.clickSlice(prev_get_sliceTotal);
			}
			
			$('.diagrammOne .b-listsDetail__item.active').removeClass('active');
			
			var get_chart      = $(this).attr('data-chart');
			var get_slice      = $(this).attr('data-slice');
			var get_sliceTotal = parseInt(get_slice);
			
			if (get_chart == '1')
			{
				chart1.clickSlice(get_sliceTotal);
			}
			
			if (get_chart == '2')
			{
				chart2.clickSlice(get_sliceTotal);
			}
			
			$(this).addClass('active');
		}
		
		return false;
	});
	
	$('.diagrammTwo .b-listsDetail__item').click(function ()
	{
		var get_data = $(this).attr('data-tab');
		$('.diagrammTwo .tab_container').addClass('no-active_tab');
		$('.diagrammTwo #' + get_data).removeClass('no-active_tab');
		
		if ($(this).hasClass('active'))
		{
		
		}
		else
		{
			var prev_get_chart      = $('.diagrammTwo .b-listsDetail__item.active').attr('data-chart');
			var prev_get_slice      = $('.diagrammTwo .b-listsDetail__item.active').attr('data-slice');
			var prev_get_sliceTotal = parseInt(prev_get_slice);
			
			if (prev_get_chart == '1')
			{
				chart1.clickSlice(prev_get_sliceTotal);
			}
			
			if (prev_get_chart == '2')
			{
				chart2.clickSlice(prev_get_sliceTotal);
			}
			
			$('.diagrammTwo .b-listsDetail__item.active').removeClass('active');
			
			var get_chart      = $(this).attr('data-chart');
			var get_slice      = $(this).attr('data-slice');
			var get_sliceTotal = parseInt(get_slice);
			
			if (get_chart == '1')
			{
				chart1.clickSlice(get_sliceTotal);
			}
			
			if (get_chart == '2')
			{
				chart2.clickSlice(get_sliceTotal);
			}
			
			$(this).addClass('active');
		}
		
		return false;
	});
	
})(jQuery, window, document);
