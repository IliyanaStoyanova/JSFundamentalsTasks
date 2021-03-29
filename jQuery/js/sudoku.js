$(function(){
    $("button").on("click", function(e){
        e.preventDefault();
        if($("#difficulty option:selected").val().length === 0){
            $(".game-container").hide();
            $(".error-message").show().text("Please, select a valid difficulty!");
        }else{
            $.ajax({
                url: "https://sugoku.herokuapp.com/board",
                data: {
                    difficulty: $("#difficulty option:selected").val()
                },
                type: "GET",
                dataType: "json",
            })
            .done(function(data){               
                $(".game-container").empty();
                for(let i=0; i<data.board.length; i++) {
                    $(".game-container").append($("<div class='board'></div>"));
                    data.board[i].forEach(function(item){
                        if(item === 0){
                            item = "";
                        }
                        $('.board:last-child').append($(`<div class="cell"><input type="text" maxlength="1" value=${item} ></div>`));
                    });
                }
                $(".game-container").show();
                $(".error-message").hide();
            })
            .fail(function(){
                $(".error-message").show().text("Something is wrong!");
            });
        }
    });
});