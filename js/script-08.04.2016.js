var wWidth = $(window).width();
$(document).ready(function(){
if(wWidth>767){
	$('.tab-link-box').on('click',function(){
		$('.tab-link-box').removeClass('active');
		$(this).addClass('active');
		var nextTab = $(this).next('.tab-content-holder');
		if($(nextTab).css('display') == 'none'){
		$('.tab-content-holder').fadeOut();
      	$(nextTab).fadeIn();
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

//++++++++++++++++++++++++++++Add doctor - Edit Doctor++++++++++++++++++++++++++++
$(function(){
	$('#prd-dt1 ,#pd-dt1 , #pd-dt2, #pd-dt3, #pd-dt4').datepicker({
		format: 'dd-mm-yyyy'
	});
});
$(document).ready(function () {
            var $tabs = $('#dc-tab');
            $tabs.responsiveTabs({
                startCollapsed: 'accordion',
                collapsible: 'accordion',
				active: 0
            });
        });
$('.add-speciality-btn').on('click',function(){
		$('<div class="row added-fields"><div class="col-sm-5 col-xs-12"><div class="form-group"><label>Specialization:</label><select class="form-control" disabled><option>Orthopedics</option><option>abcd</option><option>tytu</option></select></div></div><div class="col-sm-7 col-xs-12"><div class="form-group cus-form-group"><label>Year of experience:</label><input disabled type="text" class="form-control date-icon" value="" id="pd-dt1" placeholder=""></div><button type="button" class="btn btn-lg btn-delete delete-speciality-btn"><i class="fa fa-minus"></i> Delete</button></div></div>'
		).insertBefore('.speciality-row');
		$('.btn-delete').click(function(){
			$(this).parents().eq(1).remove();	
		})
	})
	
$('.btn-clinic').on('click',function(){
		$('#dc-tab').responsiveTabs();
		$('.r-tabs-nav').append('<li class="r-tabs-state-default r-tabs-tab"><a class="r-tabs-anchor" href="#tab-3">Added Clinic</a></li>');
		$('#dc-tab').append('<div id="tab-3">Tab 3 content</div>');
		$('.btn-delete').click(function(){
			$(this).parents().eq(1).remove();	
		})
	})