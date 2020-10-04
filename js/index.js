
document.addEventListener("DOMContentLoaded",function(){
//rating first star
    var list=['one','two','three','four','five'];
    list.forEach(function(element) {
      document.getElementById(element).addEventListener("click", function(){
        var cls=document.getElementById(element).className;
    
        if(cls.includes("unchecked"))
           {
       document.getElementById(element).classList.remove("unchecked");
    
      document.getElementById(element).classList.add("checked");
          }
        else
          {
      document.getElementById(element).classList.remove("checked");   
      
      document.getElementById(element).classList.add("unchecked");
          }
    });
    });

    //rating second star
      var list=['first','second','third','fouth','fifth'];
    list.forEach(function(element) {
      document.getElementById(element).addEventListener("click", function(){
        var cls=document.getElementById(element).className;
    
        if(cls.includes("unchecked"))
           {
       document.getElementById(element).classList.remove("unchecked");
    
      document.getElementById(element).classList.add("checked");
          }
        else
          {
      document.getElementById(element).classList.remove("checked");   
      
      document.getElementById(element).classList.add("unchecked");
          }
    });
    });

    //third star

var list=['o','t','th','f','fi'];
    list.forEach(function(element) {
      document.getElementById(element).addEventListener("click", function(){
        var cls=document.getElementById(element).className;
    
        if(cls.includes("unchecked"))
           {
       document.getElementById(element).classList.remove("unchecked");
    
      document.getElementById(element).classList.add("checked");
          }
        else
          {
      document.getElementById(element).classList.remove("checked");   
      
      document.getElementById(element).classList.add("unchecked");
          }
    });
    });
    $(document).ready(function(){
        $(".p1").show();
        $("#btn1").click(function(){

            $(".p1").toggle();
        });
        $(".p2").hide();
        $("#btn2").click(function(){

          $(".p2").toggle();
      });
      $(".p3").hide();
        $("#btn3").click(function(){

          $(".p3").toggle();
      });

      $(".first").mouseover(function(){

        $(this).css("background-color","skyblue");
        $(this).css("color","black");
        $(".button1").css("background-color","White");
        $(".button1").css("color","black")
      })

      $(".first").mouseout(function(){

        $(this).css("background-color"," rgb(241, 238, 238)");
        $(this).css("color","");
        $(".button1").css("background-color","");
        $(".button1").css("color","")
      })
      
      //second price
      $(".second").mouseover(function(){

        $(this).css("background-color","skyblue");
        $(this).css("color","black");
        $(".button1").css("background-color","White");
        $(".button1").css("color","black")
      })

      $(".second").mouseout(function(){

        $(this).css("background-color"," rgb(241, 238, 238)");
        $(this).css("color","");
        $(".button1").css("background-color","");
        $(".button1").css("color","")
      })
      //third price

      $(".third").mouseover(function(){

        $(this).css("background-color","skyblue");
        $(this).css("color","black");
        $(".button1").css("background-color","White");
        $(".button1").css("color","black")
      })

      $(".third").mouseout(function(){

        $(this).css("background-color"," rgb(241, 238, 238)");
        $(this).css("color","");
        $(".button1").css("background-color","");
        $(".button1").css("color","")
      })
      
    });


});
