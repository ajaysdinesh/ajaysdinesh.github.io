/*
 * JS Settings For DotNetNuke Skin by bestdnnskins.com
 * Copyright 2013 By BESTDNNSKINS.COM
 */
//Add meta to head:
jQuery(document).ready(function() {
	$('head').append('<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=2.0"/>');
});

//For Fancy Lightbox Alternative:
jQuery(document).ready(function() {
	$(".fancybox").fancybox({
	    openEffect:'elastic',closeEffect:'fade',nextEffect:'fade', prevEffect:'fade'
	});
});

//For Search Value:
jQuery(document).ready(function(){
    var s="Search...";
    $("#dnn_dnnSEARCH_txtSearch,#dnn_dnnSEARCH2_txtSearch").val(s).click(function(){
        var ss=$(this).val();if(ss==s)$(this).val("") }
       )
      .blur(function(){
        var ss=$(this).val();if(ss=="")$(this).val(s) }
       );
});

//For Mobile Menu:
jQuery(document).ready(function(){
	  $("#menuclick").click(function(event) {
	    event.preventDefault();
	    $("#nav_box").slideToggle("fast");
			return false;
	  });
});


jQuery(document).ready(function($) {		
	if ($(window).width() >= 1000){				
		$('.TB_Wrapper').TransBanner({
		  slide_delaytime	: 6,
			slide_transition: 2,
			navigation_type: 3,
			button_margin:70,
			button_size: 26,
			caption_bg_color: '#000',
			caption_bg_opacity: .2,
			responsive : true,
			responsive_limit_autoplay : '', 
			responsive_limit_caption : 480,
			responsive_limit_navigation : 480,
			responsive_limit_navigation_type : 2, 
			responsive_screen_based_limits : true 
		});
	} else {
		$('.TB_Wrapper').TransBanner({
		  slide_delaytime	: 6,
			slide_transition: 2,
			navigation_type: 3,
			button_margin:10,
			button_size: 26,
			caption_bg_color: '#000',
			caption_bg_opacity: .2,
			responsive : true,
			responsive_limit_autoplay : '', 
			responsive_limit_caption : 480,
			responsive_limit_navigation : 480,
			responsive_limit_navigation_type : 2, 
			responsive_screen_based_limits : true 
		});
	}
})

//For CountDown Clock:
jQuery(document).ready(function($){
    $('#countdown_clock').circularCountdown({
        strokeDaysBackgroundColor:'rgba(101,127,129,0.2)',
        strokeDaysColor:'#b1e8ff',
        strokeHoursBackgroundColor:'rgba(101,127,129,0.2)',
        strokeHoursColor:'#71cef5',
        strokeMinutesBackgroundColor:'rgba(101,127,129,0.2)',
        strokeMinutesColor:'#f7a11a',
        strokeSecondsBackgroundColor:'rgba(101,127,129,0.2)',
        strokeSecondsColor:'#fdd089',
        strokeWidth:17,
        strokeBackgroundWidth:17,
        countdownEasing:'easeOutBounce',
        countdownTickSpeed:'slow',
        backgroundShadowColor: 'rgba(0,0,0,0.2)',
        backgroundShadowBlur: 0,
        strokeShadowColor: 'rgba(0,0,0,0.2)',
        strokeShadowBlur: 0
    });
});


//For Icon Hover:
jQuery(document).ready(function($) {
	$(".icon_hover").hover(function () {
		$(this).find('img').animate({ opacity: 0.5 }, 400, function() { $(this).animate({ opacity: 1 }, 400); });
	},
	function () {
	});					 							 
});

//For Accordion Style:
jQuery(document).ready(function() { 
        $( "#accordion" ).accordion({  
            collapsible: true  
        });  
});

//For CarouFredSel Style:
jQuery(document).ready(function() {
	$("#carouFredSel").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev",
		next: "#caroul_next",
		mousewheel: true,
		scroll: 1,
		items: {
			width: 205,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 5
			}
		}
	});
});

//For Quovolver Style:
jQuery(document).ready(function($) {
    $("#quovolver_style").quovolver({
        children: "li",
        transitionSpeed: 600,
        autoPlay: true,
        autoPlaySpeed: 5000,
        pauseOnHover: true,
        equalHeight: false,
        navPosition: "above",
        navNum: true
    })
});

//For Shake Style:
jQuery(function(){
    $(".shake img").each(function(k,img){
	  new JumpObj(img,10);
     $(img).hover(function(){this.parentNode.parentNode.className="hover"});
    })
});