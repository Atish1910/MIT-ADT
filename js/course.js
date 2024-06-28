

$(window).bind('resizeEnd', function() {
    calculateHeight();
    });
    
    function calculateHeight(){
    if ($(window).width()<768){
       $('.carousel-item').css({
           'height':($(window).height())
       });
    }else{
       $('.carousel-item').css({
           'height':($(window).height()-$('.header').outerHeight(true))-($('footer').outerHeight(true)/3)
       });
    }
    }
   
   
   
   
   $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();  
      $(".logofixed").hide();
       $(window).scroll(function() {    
           var scroll = $(window).scrollTop();            
           if (scroll >= 20) {
               $(".logofixed").show();
               $(".logox").hide();   
                $(".navbar-light .list-inline a.btnread").addClass("btnreadfixed");             
               $(".navbar-light .navbar-nav .nav-link.btnread.virt_btn").addClass("btnreadfixed");            
               $(".fixed-top").addClass("darkHeader");
           } else {
               $(".logofixed").hide();
               $(".logox").show();
               $(".fixed-top").removeClass("darkHeader");
                $(".navbar-light .list-inline a.btnread").removeClass("btnreadfixed");    
               $(".navbar-light .navbar-nav .nav-link.btnread.virt_btn").removeClass("btnreadfixed");
           }
       });               
    }); 
   
   
   jQuery('.c_ul_1 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_2  > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_3  > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_4  > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_5  > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_6  > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_7  > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_8 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_9 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_10 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_11 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_12 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_13 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_14 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_15 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_16 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_17 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_18 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_19 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_20 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_21 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_22 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_23 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_24 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_25 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_26 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_27 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_28 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_29 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_30 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_31 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_32 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_33 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_34 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_35 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_36 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_37 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_38 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_39 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_40 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_41 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_42 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_43 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_44 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_45 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_46 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_47 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_48 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_49 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_50 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_51 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_52 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_53 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_54 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_55 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_56 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_57 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_58 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_59 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_60 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_61 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_62 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_63 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_64 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_65 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_66 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_67 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_68 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   jQuery('.c_ul_69 > li > a').click(function(){
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').removeClass('active');
   jQuery(this).parent("li").parent("ul").parent("div").parent('div').children("div").children("div").children('div').addClass('fade');
   jQuery(jQuery(this).attr('data-href')).addClass('active');
   jQuery(jQuery(this).attr('data-href')).removeClass('fade');
   jQuery(this).parent("li").parent("ul").children('li').children("a").removeClass('active');
   jQuery(this).addClass('active');
   });
   
   $(".Programmestabs_mobile li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $(".Programmesection").offset().top-140
   }, 1000);
   });
   
   $(".Programmestabs li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_ug").offset().top-100
   }, 1000);
   });
   $("#programmestype_ug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div1_sub").offset().top-100
   }, 1000);
   });
   $("#programmestype_pg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_pg").offset().top-100
   }, 1000);
   });
   $("#programmestype_doctorate li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_doctorate").offset().top-100
   }, 1000);
   });
   $("#programmestype_phd li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phd").offset().top-100
   }, 1000);
   });
   $("#programmestype_bdes li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bdes").offset().top-100
   }, 1000);
   });
   $("#programmestype_btech li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_btech").offset().top-100
   }, 1000);
   });
   $("#programmestype_btech2nd li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_btech2nd").offset().top-100
   }, 1000);
   });
   $("#programmestype_marinelateral li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_marinelateral").offset().top-100
   }, 1000);
   });
   $("#programmestype_btechbio li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_btechbio").offset().top-100
   }, 1000);
   });
   $("#programmestype_intmtech li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_intmtech").offset().top-100
   }, 1000);
   });
   $("#programmestype_btechmarine li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_btechmarine").offset().top-100
   }, 1000);
   });
   $("#programmestype_btechfood li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_btechfood").offset().top-100
   }, 1000);
   });
   $("#programmestype_bfa li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bfa").offset().top-100
   }, 1000);
   });
   $("#programmestype_bpa li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bpa").offset().top-100
   }, 1000);
   });
   $("#programmestype_barch li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_barch").offset().top-100
   }, 1000);
   });
   $("#programmestype_bed li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bed").offset().top-100
   }, 1000);
   });
   $("#programmestype_filmu li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_filmu").offset().top-100
   }, 1000);
   });
   $("#programmestype_vedicu li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_vedicu").offset().top-100
   }, 1000);
   });
   $("#programmestype_bahons li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bahons").offset().top-100
   }, 1000);
   });
   $("#programmestype_bba li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bba").offset().top-100
   }, 1000);
   });
   $("#programmestype_bcom li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bcom").offset().top-100
   }, 1000);
   });
   $("#programmestype_bca li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bca").offset().top-100
   }, 1000);
   });
   $("#programmestype_bajournalism li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bajournalism").offset().top-100
   }, 1000);
   });
   $("#programmestype_baadmin li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_baadmin").offset().top-100
   }, 1000);
   });
   $("#programmestype_lawug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_lawug").offset().top-100
   }, 1000);
   });
   $("#programmestype_bsccs li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_bsccs").offset().top-100
   }, 1000);
   });
   $("#programmestype_dns li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_dns").offset().top-100
   }, 1000);
   });
   $("#programmestype_mdes li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mdes").offset().top-100
   }, 1000);
   });
   $("#programmestype_mtech li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mtech").offset().top-100
   }, 1000);
   });
   $("#programmestype_msc li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_msc").offset().top-100
   }, 1000);
   });
   $("#programmestype_maenglish li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_maenglish").offset().top-100
   }, 1000);
   });
   $("#programmestype_edu li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_edu").offset().top-100
   }, 1000);
   });
   $("#programmestype_mfa li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mfa").offset().top-100
   }, 1000);
   });
   $("#programmestype_vedicpost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_vedicpost").offset().top-100
   }, 1000);
   });
   $("#programmestype_mpa li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mpa").offset().top-100
   }, 1000);
   });
   $("#programmestype_mba li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mba").offset().top-100
   }, 1000);
   });
   $("#programmestype_mca li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mca").offset().top-100
   }, 1000);
   });
   $("#programmestype_majournalism li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_majournalism").offset().top-100
   }, 1000);
   });
   $("#programmestype_biopost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_biopost").offset().top-100
   }, 1000);
   });
   $("#programmestype_maadmin li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_maadmin").offset().top-100
   }, 1000);
   });
   $("#programmestype_maadmin li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_maadmin").offset().top-100
   }, 1000);
   });
   $("#programmestype_foodpost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_foodpost").offset().top-100
   }, 1000);
   });
   $("#programmestype_mtechconstruction li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mtechconstruction").offset().top-100
   }, 1000);
   });
   $("#programmestype_archpost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_archpost").offset().top-100
   }, 1000);
   });
   $("#programmestype_lawpost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_lawpost").offset().top-100
   }, 1000);
   });
   $("#programmestype_filmpost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_filmpost").offset().top-100
   }, 1000);
   });
   $("#programmestype_pgdcp li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_pgdcp").offset().top-100
   }, 1000);
   });
   $("#programmestype_intmba li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_intmba").offset().top-100
   }, 1000);
   });
   $("#programmestype_eto li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_eto").offset().top-100
   }, 1000);
   });
   $("#programmestype_phdfood li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phdfood").offset().top-100
   }, 1000);
   });
   $("#programmestype_phdhuman li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phdhuman").offset().top-100
   }, 1000);
   });
   $("#programmestype_phdvedic li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phdvedic").offset().top-100
   }, 1000);
   });
   $("#programmestype_phdlaw li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phdlaw").offset().top-100
   }, 1000);
   });
   $("#programmestype_phdbio li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phdbio").offset().top-100
   }, 1000);
   });
   $("#programmestype_phdapplied li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_phdapplied").offset().top-100
   }, 1000);
   });
   $("#programmestype_sanskrit li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_sanskrit").offset().top-100
   }, 1000);
   });
   $("#programmestype_psychologypost li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_psychologypost").offset().top-100
   }, 1000);
   });
   $("#programmestype_itug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_itug").offset().top-100
   }, 1000);
   });
   $("#programmestype_cseug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_cseug").offset().top-100
   }, 1000);
   });
   $("#programmestype_aerospaceug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_aerospaceug").offset().top-100
   }, 1000);
   });
   $("#programmestype_civilug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_civilug").offset().top-100
   }, 1000);
   });
   $("#programmestype_etcug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_etcug").offset().top-100
   }, 1000);
   });
   $("#programmestype_mechug li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mechug").offset().top-100
   }, 1000);
   });
   $("#programmestype_itpg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_itpg").offset().top-100
   }, 1000);
   });
   $("#programmestype_cspg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_cspg").offset().top-100
   }, 1000);
   });
   $("#programmestype_civilpg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_civilpg").offset().top-100
   }, 1000);
   });
   $("#programmestype_electronicspg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_electronicspg").offset().top-100
   }, 1000);
   });
   $("#programmestype_mechpg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_mechpg").offset().top-100
   }, 1000);
   });
   $("#programmestype_chempg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_chempg").offset().top-100
   }, 1000);
   });
   $("#programmestype_chempg li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_chempg").offset().top-100
   }, 1000);
   });
   $("#programmestype_datascience li a").on('click', function(event) {    
   $('html, body').animate({
   scrollTop: $("#con_div_sub_datascience").offset().top-100
   }, 1000);
   });

// //////////////////////////////////////////////////////////////////////////////////////////////////////
// function handleClick(className) {
//     jQuery(className + ' > li > a').click(function () {
//         var $this = jQuery(this);
//         var $parentDiv = $this.closest('div').children('div').children('div');

//         // Remove 'active' class from all related elements
//         $parentDiv.removeClass('active').addClass('fade');
//         jQuery(className + ' > li > a').removeClass('active');

//         // Add 'active' class to the clicked element and its associated content
//         $this.addClass('active');
//         jQuery($this.attr('data-href')).addClass('active').removeClass('fade');

//         // Prevent default link behavior
//         event.preventDefault();
//     });
// }

// // Call handleClick function for each class
// for (var i = 1; i <= 69; i++) {
//     handleClick('.c_ul_' + i);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // Function to handle scroll to element based on data attribute

// // Assuming a consistent naming convention for IDs and classes

// $("[id^='programmestype_'] li a").on('click', function (event) {
//     var programType = $(this).closest("[id^='programmestype_']").attr('id').replace('programmestype_', '');
//     $('html, body').animate({
//         scrollTop: $("#con_div_sub_" + programType).offset().top - 100
//     }, 1000);
// });
