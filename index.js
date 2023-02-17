$(document).ready(() => {
  $("#hide").click(() => {
    $("#pa").hide();
  });
  $("#code").click(() => {
    $(".code").hide();
  });
  $("#codeshow").click(() => {
    $(".code").show().append("<p>append: the element is show now </p>").prepend("<p> prepend : thanks alote </p>");
  });
  $("#show").click(() => {
    $("#pa").show().after("after : the element is show in tag").before("before : the element is show  in tag");
  });
  $("#toggle").click(() => {
    $(".toggle").toggle();
  });
  $("#hide1000").click(() => {
    $(".hide1000").hide(1000);
  });
  $("#show1000").click(() => {
    $(".hide1000").show(1000);
  });
  $("#fadein").click(() => {
    $(".testfadein").fadeIn();
    $(".testfadein2").fadeIn("slow");
    $(".testfadein3").fadeIn(1500);
  });
  $("#fadeout").click(() => {
    $(".testfadein").fadeOut();
    $(".testfadein2").fadeOut("slow");
    $(".testfadein3").fadeOut(3000);
  });
  $("#flip").click(function () {
    $("#panel").slideDown();
  });
  $("#nimation").click(function () {
    $(".nimation").animate({ left: '250px' });
  });
  $("#ani").click(function () {
    $(".ani").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    }, 3000);
  });
    //array for saved state id and class from click event nav bar
    const t = ["iframe","Sliding", "Tutorial", "Introduction", "Started", "Syntax", "HideShow", "Fading", "Animation", "Stop", "remove"]
    //function lessCode showHidin content
    const lessCode = (x, ...arrtest) => {
      let newarr = arrtest.filter((s) => s != x)
      $(`.${x}`).click(() => {
        $(`#${x}`).show("slow", () => {
          newarr.map((p)=>$(`#${p}`).hide(1500)) 
        })
      }
      )
    }
    //the name of class and spread array
    lessCode("Sliding", ...t)
    lessCode("Animation", ...t)
    lessCode("Tutorial", ...t)
    lessCode("Introduction", ...t)
    lessCode("Started", ...t)
    lessCode("Syntax", ...t)
    lessCode("Fading", ...t)
    lessCode("Stop", ...t)
    lessCode("remove", ...t)
    lessCode("HideShow", ...t)
    lessCode("iframe", ...t)
  // $("#anistop").click(function () {
  //   $(".ani").stop();
  // });
  // $(".Tutorial").click(() => {
  //   $("#Tutorial").show("slow", () => {
  //     $("#Introduction").hide("slow");
  //     $("#Started").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   });


  // });
  // $(".Introduction").click(() => {
  //   $("#Introduction").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Started").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   }
  //   );
  // });
  // $(".Started").click(() => {
  //   $("#Started").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Introduction").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   });
  // });
  // $(".Syntax").click(() => {
  //   $("#Syntax").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Introduction").hide(1500);
  //     $("#Started").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   });
  // });
  // $(".HideShow").click(() => {
  //   $("#HideShow").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Introduction").hide(1500);
  //     $("#Started").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   });
  // })
    // ; $(".Fading").click(() => {
    //   $("#Fading").show("slow", () => {
    //     $("#Tutorial").hide("slow");
    //     $("#Introduction").hide(1500);
    //     $("#Started").hide(1500);
    //     $("#Syntax").hide(1500);
    //     $("#HideShow").hide(1500);
    //     $("#Sliding").hide(1500);
    //     $("#Animation").hide(1500);
    //     $("#Stop").hide(1500);
    //     $("#remove").hide(1500);

    //   });
    // });



  // const showHidin = (a, b, c, d, e, f, g, h, i, j, k) => {
  //   return ($(`.${a}`).click(() => {
  //     $(`#${b}`).show("slow", () => {
  //       $(`#${c}`).hide("slow");
  //       $(`#${d}`).hide(1500);
  //       $(`#${e}`).hide(1500);
  //       $(`#${f}`).hide(1500);
  //       $(`#${g}`).hide(1500);
  //       $(`#${h}`).hide(1500);
  //       $(`#${i}`).hide(1500);
  //       $(`#${j}`).hide(1500);
  //       $(`#${k}`).hide(1500);

  //     })

  //   }
  //   ))
  // }

  // $(".Sliding").click(() => {
  //   $("#Sliding").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Introduction").hide(1500);
  //     $("#Started").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   });
  // })
  // showHidin("Animation", "Animation", "Tutorial", "Introduction", "Started", "Syntax", "HideShow", "Fading", "Sliding", "Stop", "remove")
  // $(".nimation").click(() => {
  //   $("#Animation").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Introduction").hide(1500);
  //     $("#Started").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Stop").hide(1500);
  //     $("#remove").hide(1500);

  //   });
  // });
  // showHidin("Stop", "Stop", "Tutorial", "Introduction", "Started", "Syntax", "HideShow", "Fading", "Sliding", "Animation", "remove")
  // $(".Stop").click(() => {
  //   $("#Stop").show("slow", () => {
  //     $("#Tutorial").hide("slow");
  //     $("#Introduction").hide(1500);
  //     $("#Started").hide(1500);
  //     $("#Syntax").hide(1500);
  //     $("#HideShow").hide(1500);
  //     $("#Fading").hide(1500);
  //     $("#Sliding").hide(1500);
  //     $("#Animation").hide(1500);
  //     $("#remove").hide(1500);

  //   });
  // });
  // showHidin("remove", "remove", "Tutorial", "Introduction", "Started", "Syntax", "HideShow", "Fading", "Sliding", "Animation", "Stop")
  // $().click(() => {
  //   $().show("slow", () => {
  //     $().hide("slow");
  //     $().hide(1500);
  //     $(.hide(1500);
  //     $().hide(1500);
  //     $().hide(1500);
  //     $().hide(1500);
  //     $(.hide(1500);
  //     $().hide(1500);
  //     $().hide(1500);
  //   });
  // });
  $("#removebtn").click(() => {
    $("#removeElement").remove()
  })

  $("#removebtn2").click(() => {
    $("#removeElement2").empty();
  })




})

