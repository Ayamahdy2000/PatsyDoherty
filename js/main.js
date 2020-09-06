$(window).ready(function(){
 
   $('.filter-group').on("click",function(){
    $('.filter-group').removeClass('active');
    $(this).addClass('active');
  var selector =  $(this).attr("data-filter");
    if(selector == "*"){
        $('.item').show();
    }else if (selector==".spring")
    {
        $(".img1").addClass("animated fadeInRight");
        $(".img2").addClass("animated fadeInDown")
        $(".img3").addClass("animated fadeInUp")
        $(".spring").show();
        $(".summer").hide();
        $(".autumn").hide();
   
    }else if (selector==".summer")
    {
        $(".img1").addClass("animated fadeInRight");
        $(".img2").addClass("animated fadeInDown")
        $(".img3").addClass("animated fadeInUp")
        $(".spring").hide();
        $(".summer").show();
        $(".autumn").hide();
    }
    else if (selector==".autumn")
    {
        $(".img1").addClass("animated fadeInRight");
        $(".img2").addClass("animated fadeInDown")
        $(".img3").addClass("animated fadeInUp")
        $(".spring").hide();
        $(".summer").hide();
        $(".autumn").show();
    }


   })


 
    });
