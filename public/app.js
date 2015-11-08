$(document).ready(
	function(){
		//$("div#wrapper > div").hide();
    if (document.location.hash) {
      $('div#wrapper li > a[href=' + document.location.hash + ']').addClass('active');
      $('div#wrapper  div' + document.location.hash).show();
      $('div#wrapper  div' + document.location.hash).addClass('active');
    } else {
      $('ul#menu li:first-child > a').addClass('active');
      $('div#wrapper div:first-child').show();
    }

    $('div#wrapper > div > button').click(
      function() {
       document.location=$(this).attr('href');
       $("div#wrapper>div").hide();
       $('div#wrapper > div' + $(this).attr('href')).show();
       $('div#content div' + $('ul#menu li a.active').attr('href')).hide();
       $('ul#menu a.active').removeClass('active');
       $(this).addClass('active');
       return false;
     }
     )

    $("#maintotal").change(function(){
      $("#goaldate").val("September 2017");
    });


    function refresh(){
      $.ajax({
        url: "mydata",
        context: document.body,
        error: function(e,d){
         console.log(e);
         setTimeout(refresh,2000);
       },
       success: function(data){
        if (data.newgoal == 1) {
        }   
        var template = $('#toptemplate').html();
        Mustache.parse(template); 
        var rendered = Mustache.render(template, data);
        $('#toprender').html(rendered);
        console.log("update.done");
        setTimeout(refresh,2000);
      },
      timeout: 3000 
    });
    }


    refresh();


    $("#btnshare").click(function(){
      var settings = {
        "async": false,
        "crossDomain": true,
        "url": "/saveexpense",
        "method": "GET",
        "headers": {
          "cache-control": "no-cache",
        },
        "data": "{\n\"user\": \"Igor\",\n\"description\": \"some expense\",\n\"amount\": 34\n}"
      }
      console.log($("#expensetotal").val());
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    });
  }
  );
