// $('.like').click(function(){
//     $(this).toggleClass('clicked');
//     $(".card").stop();
//   });

$(document).ready(function() {
    $(".login").click(function() {
        $(".signup").hide();
        $(".log").show();

    });
});

$(document).ready(function() {
    $(".sign").click(function() {
        $(".log").hide();
        $(".signup").show();

    });
});
$(document).ready(function() {
    $(".click").click(function() {
        $(".log").hide();
        $(".reset").show();

    });
});
$(document).ready(function() {
    $(".done").click(function() {
        $(".reset").hide();
        $(".codeNumber").show();

    });
});

$(document).ready(function() {
    $(".done2").click(function() {
        $(".codeNumber").hide();
        $(".returnPassword").show();

    });
});
// photoDetail
$(document).ready(function() {
    $('.like').click(function(){
        $(this).toggleClass('clicked');
    
      });
      $(".card").click(function() {
    
        $(this).stop();
    
    }); 
    });
    
// $(document).ready(function() {
//     $(".card").click(function() {

//         location.href="photoDetail.html"

//     });
// });

// $('.like').click(function(){
//     $(this).toggleClass('clicked');
//   });
// card
//   $(document).ready(function() {


// });
$(function() {


    $(window).on("scroll", function() {
        var sc = $(window).scrollTop();
        if (sc > 80) {
            $(".navbar").css("backgroundColor", "#000");
        } else {
            $(".navbar").css("backgroundColor", "transparent");
        }
    })
})
$(document).ready(function() {
    $(".aboutUser").click(function() {
        $(".artWork").hide();
        $(".artPhoto").css("backgroundColor", "transparent");
        $(".artPhoto").css("color", "#fff");
        $(".about").show();

    });
});

$(document).ready(function() {
    $(".artPhoto").click(function() {
        $(".artWork").show();
        $(".about").hide();
        $(".artPhoto").css("backgroundColor", "#232123");
        $(".artPhoto").css("color", "#D4AF37");

    });
});
$(document).ready(function() {
    $(".okkk").click(function() {
        $(".addWork").hide();
        $(".site-footer").hide();
        $(".successfully").show();

    });
});

$(document).ready(function() {
    $(".change").click(function() {
        $(".form").toggle();
     

    });
});

$(document).ready(function() {
    $(".fashionDesign").click(function() {
        $(".fa").show();
    });
});


// community


const messages = document.getElementById('messages');

function appendMessage() {
	const message = document.getElementsByClassName('message')[0];

  messages.appendChild(newMessage);
}

function getMessages() {

  shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;
  
  appendMessage();

  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

scrollToBottom();

setInterval(getMessages, 100);

$(document).ready(function() {
    
    $(".sea").on("click" , function (){
        $(".search").show();
 
    })
})
$(document).ready(function(){
    $(".search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".msg").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

$(document).ready(function() {
    
    $(".move").click(function() {
        $(".choose").hide();
    
        $(".chat").fadeIn(function scrollToBottom() {
            messages.scrollTop = messages.scrollHeight;
          }
          );
    })
})
// // like
//  var garbage = document.getElementById("garbage");

// garbage.addEventListener("click", function() {
//   this.children[0].style.color = "#66c144";
//   this.querySelector('.fas').style.fontSize = '3rem';
//    this.getElementsByTagName('I')[0].classList.toggle('fa-spin');
//    this.firstElementChild.style.transition = 'color 1.5s ease 1.25s, font-size 0.75s ease-out';
//  }, false);
// // message
$(function () {
    "use strict";

    $(".view").on("click" , function (){
        $(".lim").show(function scrollToBottom() {
            messages.scrollTop = messages.scrollHeight;
          });
        $("body").css("backgroundColor" , "#000");
    })

}) 
function myFunction(x) {
    if (x.matches) { 
        $(".sec").on("click" , function (){
            $(".left").hide();
            $(".conv").fadeIn(function scrollToBottom() {
                messages.scrollTop = messages.scrollHeight;
              });
            $("body").css("backgroundColor" , "#000");
        })
    } else {
        // $(".sec").on("click" , function (){
        //     $(".left").show();
        //     $(".conv").fadeIn(function scrollToBottom() {
        //         messages.scrollTop = messages.scrollHeight;
        //       });
      
        // })
        $("body").css("backgroundColor" , "#131213");
    }
  }
var x = window.matchMedia("(max-width: 992px)")
myFunction(x) 
x.addListener(myFunction)
// animation
    AOS.init({
        offset: 400,
    duration: 1000
    });
    
    

