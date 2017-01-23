var wWidth = $(window).width();

$(document).ready(function(){



if(wWidth>767){

	$('.tab-link-box').on('click',function(){

		$('.tab-link-box').removeClass('active');

		$(this).addClass('active');

		

		var nextTab = $(this).next('.tab-content-holder');

		if($(nextTab).css('display') == 'none'){

		$('.tab-content-holder').hide();

      	$(nextTab).show();

		}

	});

	}

	else{

		$('.tab-link-box').on('click',function(){

		$('.tab-link-box').removeClass('active');

		$(this).addClass('active');

		

		var nextTab = $(this).next('.tab-content-holder');

		if($(nextTab).css('display') == 'none'){

		$('.tab-content-holder').slideUp();

         $(nextTab).slideDown();

	   }

	

	  

	});

	}

	

});



$(document).ready(function(){

	$('.radio-user-role').change(function() {

		if ($("input:radio[name=user-role]:checked").val() == "rl-mnul"){

			$('.rl-group-block').slideUp();

			$('.rl-mnul-block').slideDown();

			}

			else if($("input:radio[name=user-role]:checked").val() == "rl-group"){

			$('.rl-mnul-block').slideUp();

			$('.rl-group-block').slideDown();

			}

    });

	

		$('.edit-radio-user-role').change(function() {

		if ($("input:radio[name=edit-user-role]:checked").val() == "edit-rl-mnul"){

			$('.rl-group-block').slideUp();

			$('.rl-mnul-block').slideDown();

			}

			else if($("input:radio[name=edit-user-role]:checked").val() == "edit-rl-group"){

			$('.rl-mnul-block').slideUp();

			$('.rl-group-block').slideDown();

			}

    });

	

});

$(document).ready(function(){

	$('.srch-result-edit-link').on('click',function(){

		$('.um-edit-section').slideDown();

	});

});

$(document).ready(function(){

	$('.gm-view-enlstd-link').on('click',function(){

		$('.gm-edit-prmisn-section').slideUp();

		$('.gm-view-enlstd-section').slideDown();

	});

	$('.gm-edit-prmisn-link').on('click',function(){

		$('.gm-view-enlstd-section').slideUp();

		$('.gm-edit-prmisn-section').slideDown();

	});

});

$(document).ready(function(){

	$('.gm-block-link').on('click',function(){

		$('.gm-block-popup').fadeIn();

	});

		$('.block-popup-close').on('click',function(){

		$('.gm-block-popup').fadeOut();

	});

});

/*verification status*/

$(document).ready(function(){

	$('input:radio[name=v-status]').change(function() {

		if ($("input:radio[name=v-status]:checked").val() == "vrfy-status1"){

			$('.vrfy-status-content').slideUp();

			$('.vrfy-status1-content').slideDown();

			}

			else if($("input:radio[name=v-status]:checked").val() == "vrfy-status2"){

			$('.vrfy-status-content').slideUp();

			$('.vrfy-status2-content').slideDown();
			}
			
           else if($("input:radio[name=v-status]:checked").val() == "vrfy-status3"){

			$('.vrfy-status-content').slideUp();

			$('.vrfy-status3-content').slideDown();
			}

           else if($("input:radio[name=v-status]:checked").val() == "vrfy-status4"){

			$('.vrfy-status-content').slideUp();

			$('.vrfy-status4-content').slideDown();
			}			

    });
	
	});
	
	$(document).ready(function(){

	$('.ntfc-setting-icon').on('click',function(){

		$('.ntfc-setting-popup').fadeIn();

	});

		$('.ntfc-setting-cancel').on('click',function(){

		$('.ntfc-setting-popup').fadeOut();

	});

});