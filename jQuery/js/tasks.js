$(function() {
    $(".task1 .list:first-child li:odd").addClass("red");
    $(".task1 .list").first().find("li:even").add(".list:last-child li:nth-child(n+3)").addClass("blue");

    $(".task2").find(".box-container .box").eq(0).after("<div class='box red'></div>");
    $(".task2 .link-list").append($("<a href='#' class='new'>new link</a>"));
    $(".task2 .box-container").before($(".link-list"));

    $(".task3 .list li").on({
        "click": function(){
            alert($(this).text());
            $(".box-container .box").toggleClass("red");
        },
        "mouseover": function(){
            $(this).css("color", "blue");
        },
        "mouseout": function(){
            $(this).css("color", "black");
        }
    });
    $(".task3 .box-container .box").on({
        "click": function(){
            $(this).toggleClass("red");
        }
    });

    $(".task4 .box").on("click", function(){
        $(this).hide();
    });
    
    let widthContainer = parseInt($(".task4 .circle-container").css("width")) - parseInt($(".task4 .circle").css("width"));
    $(".task4 #checkbox").click(function(){
        if($(this).is(":checked")) {
            $(".circle").animate({
                "left": widthContainer  
            }, 2000);
        }else{
            $(".circle").animate({
                "left": 0
            }, 3000);
        }
    });
});