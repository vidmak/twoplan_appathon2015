$(document).ready(
	function(){
		//$("div#wrapper>div").hide();
		if (document.location.hash) {
                    //$('div#wrapper li > a[href=' + document.location.hash + ']').addClass('active');
                    $('div#wrapper  div' + document.location.hash).show();
                  // $('div#wrapper  div' + document.location.hash).addClass('active');

                } else {
                    //$('ul#menu li:first-child > a').addClass('active');
                    $('div#wrapper div:first-child').show();
                  }

                  $('div#wrapper > div > button').click(
                    function() {
                     document.location=$(this).attr('href');
                     //$("div#wrapper>div").hide();
                     $('div#wrapper > div' + $(this).attr('href')).show();
                       // $('div#content div' + $('ul#menu li a.active').attr('href')).hide();
                       // $('ul#menu a.active').removeClass('active');
                       // $(this).addClass('active');
                       return false;
                     }
                     )
              //onclick="document.location+='#s2';return false;"
            }
            );
