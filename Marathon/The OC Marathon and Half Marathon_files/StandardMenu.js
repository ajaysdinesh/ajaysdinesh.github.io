jQuery(document).ready(function ($) {

    function HoverOver() {
        $(this).addClass('rmhover') .find(".subMenu").stop().animate({height:'show'},200);
			// submenu right align
			var position	= $(this).position();
			var margin		= 0;
			var x	= position.left;
			var width		= $(this).find( ".subMenu" ).width();
			var parentWidth	= $(this).parent().width();
			// position
			if( x + width > parentWidth + margin )
			{
				$(this).find(".subMenu").css( { "right": 0 } );
			}    
	}

    function HoverOut() {
         $(this).removeClass('rmhover').find(".subMenu").animate({height: 'hide'},200, function() {
		  $(this).hide(); 
	  });
    }
	
	function HoverOversub() {
      $(this).find(".level1").stop().animate({height: 'show'},200);
    	// SubMenu right align
			var sublevel = $(".level1", $(this));
			if(sublevel.length > 0){
				var offset = sublevel.offset();
				var rightEage = offset.left + sublevel.outerWidth();
				if(rightEage > $(window).width()){
					sublevel.css("left", -182 + "px");
					sublevel.find(".level2").css("left", -182 + "px");
					sublevel.find(".level3").css("left", -182 + "px");
					sublevel.find(".subarrow").css("background", "none");
				}
			}
		
		}

    function HoverOutsub() {
         $(this).find(".level1").stop().animate({height: 'hide'},200, function() {
		  $(this).hide(); 
	  });
    }

    if ($(window).width() >= 768){
        var config = {
            sensitivity: 2,
            interval:100,
            over: HoverOver,
            timeout:100,
            out: HoverOut
        };
        var configsub = {
            sensitivity: 2,
            interval:100,
            over: HoverOversub,
            timeout:100,
            out: HoverOutsub
        };
        $("#standardMenu .rootMenu > li.haschild").hoverIntent(config);
		$("#standardMenu .subMenu li.haschild").hoverIntent(configsub);
    }else if ($(window).width() < 767){
		$("#standardMenu li.child-1 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-1 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-2 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-2 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;
		});	
		$("#standardMenu li.child-3 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-3 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;
		});	
		$("#standardMenu li.child-4 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-4 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-5 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-5 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-6 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-6 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-7 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-7 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-8 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-8 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-9 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-9 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-10 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-10 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-11 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-11 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-12 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-12 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
	}
	
	// SubMenu animation
    $('#standardMenu .subMenu li a span').hover(
        function(){ $(this).stop().animate({textIndent: 2}, 300); },
        function(){ $(this).stop().animate({textIndent: 0}, {duration: 300, complete: function(){}}); }
    );

   // For Win8 Tablet
   $('#standardMenu .haschild li').attr("aria-haspopup","false");
   $('#standardMenu .haschild li').attr("role","menu");
   $('#standardMenu .haschild').attr("aria-haspopup","true");
   $('#standardMenu .haschild').attr("role","menuitem");

});