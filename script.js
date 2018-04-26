
$(document).ready(function(){


/*$(document).ready(function () {
	//alert(1)
var height = Math.round($(".product_box").height());/** this function  called as getor(because)**/
// console.log(height)
// var width = Math.round($(".product_box").width());
// console.log(width)

// $(".slide_box").height(height);/** this function is called as setor(because this store the value)**/
// $(".slide_box").width(width);
// $(".slide_box").css("top",-height);

// $(".product_box").mouseenter(function(){
// 	// console.log("test")
// 	$(this).children(".slide_box").animate({
// 		"top":0
// 	},300);
// })
// $(".product_box").mouseleave(function(){
// 	// console.log("test1")
// 	$(this).children(".slide_box").animate({
// 		"top":-height
// 	},300);
// })
//modal box
$(".blackbox").hide();

$(".product_box").mouseenter(function(){
	$(this).children(".blackbox").fadeIn(1000);
	})
$(".product_box").mouseleave(function(){
	$(this).children(".blackbox").fadeOut(1000);
	
});




 
 slide_wi = $(".banner").width();
 // alert(slide_wi);

slide_hi = Math.round( $(".banner").height() );
 // alert(slide_hi);
 //Slider Example

 $(".banner").css("float","left");
  $(".mainSlide").width(slide_wi * $(".banner").length);
   $(".mainSlide,.gallery").height(slide_hi);
   $(".gallery").width(slide_wi);
  //$(".gallery").css("border","3px solid")
  $(".gallery").css("overflow","hidden")
  // $(".mainSlide").css("border","3px solid red")
 
  banner_arr=[]
  $(".banner").each(function(position){
  	//console.log(position)
  	//console.log($(this).width())
  	//console.log($(this).width()*position);
  	banner_arr[position] =$(this).width() * position
  });
  //console.log(slider_arr)
     curpos =0;
     minpos =0;
     maxpos = $(".banner").length -1;
	$(".circles span").click(function(){
		var pos = $(this).index();
		curpos = pos;
		//alert(curpos);
		// console.log(pos);
		// console.log(slider_arr[pos])
		$(".mainSlide").animate({
			"margin-left":-banner_arr[pos]+"px"
		},1000);
			$(".circles span").css("background","#f1f1f1")
			$(this).css("background","#c1c1c1");

			 if(curpos>0){
			 	$(".left_arrow").fadeIn();
			 }
			 else{
                  $(".left_arrow").fadeOut();
              }

              if(curpos < maxpos){
              	$(".right_arrow").fadeIn();
			 }
			 else{
                  $(".right_arrow").fadeOut();
              }
	  })

	$(".left_arrow").hide();



	$(".left_arrow").click(function(){
		curpos--;
		$(".mainSlide").animate({
			"margin-left":-banner_arr[curpos]+"px"
		},1000);
			
			 if(curpos>0){
			 	$(".left_arrow").fadeIn();
			 }
			 else{
                  $(".left_arrow").fadeOut();
              }

              if(curpos < maxpos){
              	$(".right_arrow").fadeIn();
			 }
			 else{
                  $(".right_arrow").fadeOut();
              }

              $(".circles span").css("background","#f1f1f1")
			  $(".circles span:eq("+curpos+")").css("background","#c1c1c1");
			})

	$(".right_arrow").click(function(){
		curpos++;
		$(".mainSlide").animate({
			"margin-left":-banner_arr[curpos]+"px"
		},1000);
			
			 if(curpos>0){
			 	$(".left_arrow").fadeIn();
			 }
			 else{
                  $(".left_arrow").fadeOut();
              }

              if(curpos < maxpos){
              	$(".right_arrow").fadeIn();
			 }
			 else{
                  $(".right_arrow").fadeOut();
              }

               $(".circles span").css("background","#f1f1f1")
			  $(".circles span:eq("+curpos+")").css("background","#c1c1c1");
			});
})





