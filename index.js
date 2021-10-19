function activeHome() {
  alert("Hello Home");
}

function showSpecBill(event) {
  $(".show_hide_order").addClass("d_none");
  $("." + event).removeClass("d_none");
}



// footer menu navigation controlls 
function activeHome() {
  $(".common_section").addClass("d_none");
  $(".home_page").removeClass("d_none");
  $("body").css("backgroundColor", "#fff");

  $(".footer_menu").removeClass("active");
  $(".footer_home").addClass("active");

  $("#last_clicked").val("footer_home");
}


function activeBillPage() {
  $(".common_section").addClass("d_none");
  $(".billing_page").removeClass("d_none");
  $("body").css("backgroundColor", "#f7f4f4");

  $(".footer_menu").removeClass("active");
  $(".footer_bill").addClass("active");

  $("#last_clicked").val("footer_bill");
}


function activeOrders() {
  $(".common_section").addClass("d_none");
  $(".order_page").removeClass("d_none");
  $("body").css("backgroundColor", "#f7f4f4");

  $(".footer_menu").removeClass("active");
  $(".footer_order").addClass("active");

  $("#last_clicked").val("footer_order");
}


function activeLeftMenu() {
  $(".service_menu").addClass("show_menu");
  $(".service_menu").removeClass("d_none");

  $(".footer_menu").removeClass("active");
  $(".footer_service").addClass("active");

  $(".dim_dark").removeClass("d_none");
}

function closeMenu() {
  $(".service_menu").removeClass("show_menu");
  $(".service_menu").addClass("d_none");

  $(".footer_menu").removeClass("active");
  var inpVal = $("#last_clicked").val();
  $("." + inpVal).addClass("active");

  $(".dim_dark").addClass("d_none");
}




// activating the add to cart popup 
function crossCart() {
  $("#item_cart").addClass("d_none");
  $(".dim_dark").addClass("d_none");
}

// cat_img 


function addToCart(cart_name) {
  $("#item_cart").removeClass("d_none");
  $(".dim_dark").removeClass("d_none");

  var source = $("." + cart_name + " .image .cat_img").attr('src');
  var product_name = $("." + cart_name + " .name_n_price .name").html();
  var product_price = $("." + cart_name + " .name_n_price .price .prdct_price").html();
  // console.log(source +" : " + product_name + " : " + product_price);

  $(".item_name").html(product_name);
  $(".item_price, .cart_price").html(product_price);
  $('.cartImg').attr('src', source);

}




// plus minus controls 

//plus minus of product popup 
$(".cart_plus").click(function () {
  var curVal = $(".cart_val").html();
  curVal = parseInt(curVal);
  $(".cart_val").html(curVal + 1);
});


$(".cart_minus").click(function () {
  var curVal = $(".cart_val").html();
  curVal = parseInt(curVal);
  if (curVal > 1) {
    $(".cart_val").html(curVal - 1);
  }
});






// plus minus of order page 
$(".add_btn").click(function () {
  var curVal = $(".spec_order_num").html();
  curVal = parseInt(curVal);
  $(".spec_order_num").html(curVal + 1);
});


$(".rmv_btn").click(function () {
  var curVal = $(".spec_order_num").html();
  curVal = parseInt(curVal);
  if (curVal > 1) {
    $(".spec_order_num").html(curVal - 1);
  }
});





// catagory clicks and events 
$(".catagory").click(function () {
  $(".catagory").removeClass("active_cat");
  $(this).addClass("active_cat");

  var dataId = $(this).attr("data-id");

  var warmTop = document.getElementById(dataId).offsetTop;

  var scndDivHght = document.getElementById("secondFixedDiv").offsetHeight;
  var brandDivHght = document.getElementById("brand").offsetHeight;
  var catagoryDivHght = document.getElementById("catagories_nav").offsetHeight;

  var totalHght = (warmTop - scndDivHght - brandDivHght - catagoryDivHght);

  $("body").animate({ scrollTop: totalHght }, 100);
  return false;

});





// processing the timeHolder search and catagory menu on scroll in body 
var catNumItems = $('.catagory').length;
$("body").scroll(function () {

  let timeHolderTop = document.getElementById("timeHolder").getBoundingClientRect().top;

  let catNavTop = document.getElementById("catagories_nav").getBoundingClientRect().top;
  let catNavHght = document.getElementById("catagories_nav").offsetHeight;









  if (timeHolderTop <= 0) {
    // adding the class that will make timeHolder fixed 
    $("#secondFixedDiv").addClass("secondFixed");
    $(".spacer_catagory").addClass("spacer_active_catagory");



    for (let i = 1; i <= catNumItems; i++) {

      var itemName = "item_" + i;
      var idNameToClass = $('[data-id=' + itemName + ']').attr('id');
      let specItemTop = document.getElementById(idNameToClass).getBoundingClientRect().top;

      if ((specItemTop - 20) <= (catNavTop + catNavHght)) {

        $(".catagory").removeClass("active_cat");
        $("." + itemName).addClass("active_cat");

        let item_left = $("." + itemName).offset().left;
        let item_width = $("." + itemName).width();
        var catWidth = $("#catagories_nav").width();
        
        if( (item_left + item_width) >= catWidth){
          $("#catagories_nav").scrollLeft(item_left);
        }else{
          $("#catagories_nav").scrollLeft(0);
        }
        
        // console.log(itemName + " : " + item_left + " catWidth: " + catWidth);
        
      }

      





    }

  } else {
    // removing the class to make the timeHolder normal 
    $("#secondFixedDiv").removeClass("secondFixed");
    $(".spacer_catagory").removeClass("spacer_active_catagory");
    // $(".spacer_catagory").css("height", "60px"); 



  }




});


