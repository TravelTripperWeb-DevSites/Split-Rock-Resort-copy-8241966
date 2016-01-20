$(document).foundation();


$(document).ready(function () {
  

	

     $('.signup input[type=text], .signup input[type=email], .promo_codes input[type=text]').on('focus', function () {
        var currValue = $(this).attr("value");

        if ($(this).val() == currValue) {
            $(this).val('');
        }

    });

    $('.signup input[type=text], .signup input[type=email], .promo_codes input[type=text]').on('blur', function () {
        if ($(this).val() == "") {
            $(this).val($(this).attr('value'));
        }
    });
    $(function () {
        $('#optionalCodes').on('change', function () {
            if ($(this).is(':checked')) {
                //alert("hello");
                $(".promo_codes").show("fast");
            }
            else $(".promo_codes").hide("fast");
        });

    });
    $(".mobile-book-now").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "fast");
        $("#mobile-booking").slideToggle();
        return false;
    })
    $("#mobile-booking-close").click(function () {
        $("#mobile-booking").slideToggle();
    })

    var path = window.location.pathname;

    var root = "/" + path.split("/")[1] + "/";
    var oldSection = "a[href='" + path + location.hash + "']";

    //console.log("a[href='" + path + hash + "']");
    var found = $(oldSection, "#cd-lateral-nav").addClass("current");

    $("a.current.root", "#cd-lateral-nav").removeClass("current");
    if (found.length > 2) {
        $(found[1]).removeClass("current");
    }
    found.parents('.item-has-children').find('.root').click();

    $(window).on('hashchange', function () {
        $(oldSection, "#cd-lateral-nav").removeClass("current");
        var newSection = "a[href='" + path + location.hash + "']";
        $(newSection, "#cd-lateral-nav").addClass("current");
        // $("a[href='" + root + "']:first","#cd-lateral-nav").addClass("current");
        oldSection = newSection;
    })

    

//	$('.datein').datepicker({ dateFormat: 'yy-mm-dd' });
//	$('.dateout').datepicker({ dateFormat: 'yy-mm-dd' });


	var forms=[".desktop-booking","#search-container"];
	$(".desktop-booking").each(function(){
	
		var root = $(this);
		var form = root.find("form");
		var checkout =root.find("input[name='depart']"); 
		var checkin = root.find("input[name='arrive']"); 
		$(form).submit(function(){

            console.log("checking form");
             

			var disableAvailRates = false;
			var checkoutValue = checkout.val().toUpperCase();
			var checkinValue = checkin.val().toUpperCase();
				if (checkoutValue == 'YYYY-MM-DD' ||checkoutValue=='CHECK-OUT') {
					checkout.val('');
					disableAvailRates = true;
				}
				if (checkinValue == 'YYYY-MM-DD'|| checkinValue =='CHECK-IN') {
					checkin.val('');
					disableAvailRates = true;
				}
				
				if (checkout.val() ==''|| checkin.val() =='') {
				
					form.find("input[name='start']").attr("disabled", 'disabled');
				}

               
                 
		})
	});
    $(".flexDates input[type=checkbox],.optionalCodes input[type=checkbox]").change(function () {

        var $this = $(this);
        var checked = $this.is(":checked");

        $(".flexDates input[type=checkbox]").each(function () {
            if (checked) {
                $(".flexDates input[type=hidden]").attr("disabled", true);

            } else {
                $(".flexDates input[type=hidden]").attr("disabled", false)
            }
        });
        var className = $this.parent().is('.flexDates') ? ".flexDates" : '.optionalCodes';
        $(className).toggleClass("checked", $(this).is(":checked"));

    })
		
		 
});
 
 // $(function() {
//    $( ".desktop-booking .datein" ).datepicker({  
//      numberOfMonths:1,  
//			dateFormat: 'yy-mm-dd',
//			      onClose: function( selectedDate ) {
//        $( ".desktop-booking .dateout" ).datepicker( "option", "minDate", selectedDate );
//      }
//    });
//    $( ".desktop-booking .dateout" ).datepicker({  
//      numberOfMonths: 1,  
//			dateFormat: 'yy-mm-dd',
//      onClose: function( selectedDate ) {
//        $( ".desktop-booking .datein" ).datepicker( "option", "maxDate", selectedDate );
//      }
//    });
//  });



function populateDefaultValues() {
    var today = new Date();
    var month = today.getMonth(),
        year = today.getFullYear();
    if (month < 0) {
        month = 11;
        year -= 1;
    }
    var oneMonthAgo = new Date(year, month, today.getDate()+1);
    $('#datein').val($.datepicker.formatDate('dd-M-yy', today));
    $('#dateout').val($.datepicker.formatDate('dd-M-yy', oneMonthAgo));
    $('#datein-page').val($.datepicker.formatDate('dd-M-yy', today));
    $('#dateout-page').val($.datepicker.formatDate('dd-M-yy', oneMonthAgo));
     $('#datein-home').val($.datepicker.formatDate('dd-M-yy', today));
    $('#dateout-home').val($.datepicker.formatDate('dd-M-yy', oneMonthAgo));

   
}

$(function() {
    
populateDefaultValues();
    
});


 $(window).load(function(){
    $(document).ready(function () {

    
                 
        $("#datein-home").datepicker({
            dateFormat: "dd-M-yy",
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#datein-home').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#dateout-home').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#dateout-home').datepicker('option', 'minDate', date2);
            }
        });
        $('#dateout-home').datepicker({
            dateFormat: "dd-M-yy",
            onClose: function () {
                var dt1 = $('#datein-home').datepicker('getDate');
                console.log(dt1);
                var dt2 = $('#dateout-home').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('#dateout-home').datepicker('option', 'minDate');
                    $('#dateout-home').datepicker('setDate', minDate);
                }
            }
        });
		
		
		
		 $("#datein-page").datepicker({
            dateFormat: "dd-M-yy",
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#datein-page').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#dateout-page').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#dateout-page').datepicker('option', 'minDate', date2);
            }
        });
        $('#dateout-page').datepicker({
            dateFormat: "dd-M-yy",
            onClose: function () {
                var dt1 = $('#datein-page').datepicker('getDate');
                console.log(dt1);
                var dt2 = $('#dateout-page').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('#dateout-page').datepicker('option', 'minDate');
                    $('#dateout-page').datepicker('setDate', minDate);
                }
            }
        });
		
		
		 $("#datein").datepicker({
            dateFormat: "dd-M-yy",
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#datein').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#dateout').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#dateout').datepicker('option', 'minDate', date2);
            }
        });
        $('#dateout').datepicker({
            dateFormat: "dd-M-yy",
            onClose: function () {
                var dt1 = $('#datein').datepicker('getDate');
                console.log(dt1);
                var dt2 = $('#dateout').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('#dateout').datepicker('option', 'minDate');
                    $('#dateout').datepicker('setDate', minDate);
                }
            }
        });
		
		
    });
});