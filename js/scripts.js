$(document).ready(function() {
  
  $("button#cat").click(function(){
    $("ul#cat-2").prepend("<li>MEOW!</li>");
    $("ul#dog-2").prepend("<li>BARK?</li>");

    $("ul#cat-2").children("li").first().click(function(){
      alert("DOGBREATH!");
      $(this).remove();
    });

    $("ul#dog-2").children("li").first().click(function(){
      alert("But I just brushed my teeth!");
      $(this).remove();
    });

  });

  $("button#dog").click(function(){
    $("ul#cat-2").prepend("<li>MEOW?</li>");
    $("ul#dog-2").prepend("<li>BARK!</li>");

    $("ul#dog-2").children("li").first().click(function(){
      alert("SQUIRREL!");
      $(this).remove();
    });

    $("ul#cat-2").children("li").first().click(function(){
      alert("...I'm a cat.");
      $(this).remove();
    });

  });
});