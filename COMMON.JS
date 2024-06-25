
// document.querySelector(".wrap-2 .btn").addEventListener("click", function() {
//     this.classList.toggle("active");
//     const collapse = document.querySelector(".wrap-2 .dropmenu")
//      if(collapse.style.display==="none"){
//         collapse.style.display==="block";
//      }
//      else{collapse.style.display==="none";}
    
         
    
// });

$(function(){
    $(".btn").click(function(){
        $(this).toggleClass("active");
        $(".dropmenu").slideToggle();
        
    });
    
    $(".PRODUCT-4 .btn-dis").click(function(e){
        e.preventDefault();

        $(".PRODUCT-4 .btn-dis").removeClass("active");
        $(this).addClass("active");
        
        

        if($(this).text()=="DESCRIPTION"){
            $(".PRODUCT-4 .diss").fadeIn();
            $(".PRODUCT-4 .dly, .siz, .vid, .revw").fadeOut(0);
        }

        else if($(this).text()=="VIDEOS"){
            $(".PRODUCT-4 .diss, .dly, .siz, .revw").fadeOut(0);
            $(".PRODUCT-4 .vid").fadeIn();
        }

        else if($(this).text()=="SIZE & SPECS"){
            $(".PRODUCT-4 .diss, .dly, .vid, .revw").fadeOut(0);
            $(".PRODUCT-4 .siz").fadeIn();
        }

        else if($(this).text()=="DELIVERY & RETURNS"){
            $(".PRODUCT-4 .diss, .siz, .vid, .revw").fadeOut(0);
            $(".PRODUCT-4 .dly").fadeIn();
        }

        else if($(this).text()=="REVIEWS"){
            $(".PRODUCT-4 .diss, .dly, .siz, .vid").fadeOut(0);
            $(".PRODUCT-4 .revw").fadeIn();
        }
    });
    


});