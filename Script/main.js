$(document).ready(function() 
        {
            $(".cross").hide();
            $(".hamburger").click(function() {
                $(".list-items").toggleClass("active");
            });

            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $(".menu").addClass("sticky");
                    $("#surname").addClass("sticky");
                } else {
                    $(".menu").removeClass("sticky");
                    $("#surname").removeClass("sticky");
                }
            });

        });

        $(document).on("scroll", function(){
            var pixels = $(document).scrollTop();
            var pageHeight = $(document).height() - $(window).height();
            var progress = 100 * pixels / pageHeight;
  
            $("#progress").css("width", progress + "%");
        })

        $(document).on({
            mouseenter: function () {
                $("#text1").css("display", "block");
                $("#label1").css("display", "none");
            },

            mouseleave: function () {
                $("#text1").css("display", "none");
                $("#label1").css("display", "block");
            }
        }, '#card1');

        $(document).on({
            mouseenter: function () {
                $("#text2").css("display", "block");
                $("#label2").css("display", "none");
            },

            mouseleave: function () {
                $("#text2").css("display", "none");
                $("#label2").css("display", "block");
            }
        }, '#card2');

        $(document).on({
            mouseenter: function () {
                $("#text3").css("display", "block");
                $("#label3").css("display", "none");
            },

            mouseleave: function () {
                $("#text3").css("display", "none");
                $("#label3").css("display", "block");
            }
        }, '#card3');