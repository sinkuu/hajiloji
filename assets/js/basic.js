$(function () {
  $('#mainWrap').each(function(){
        var txt = $(this).html();
        $(this).html(txt.replace(/problem:::/g,'<div class="'+'box problem'+'">'));
  });
  $('#mainWrap').each(function(){
        var txt = $(this).html();
        $(this).html(txt.replace(/note:::/g,'<div class="'+'box note'+'">'));
  });
  $('#mainWrap').each(function(){
        var txt = $(this).html();
        $(this).html(txt.replace(/memo:::/g,'<div class="'+'box memo'+'">'));
  });
  $('#mainWrap').each(function(){
        var txt = $(this).html();
        $(this).html(txt.replace(/jufra:::/g,'<div class="'+'jufra'+'">'));
  });
  $('#mainWrap').each(function(){
        var txt = $(this).html();
        $(this).html(txt.replace(/::::/g,"</div>"));
  });
  $('.note').prepend("<div class='title'>N O T E</div>");
  $('.memo').prepend("<div class='title'>M E M O</div>");
  $('.problem').prepend("<div class='title'>問 題</div>");
//　$('.keywords').prepend("<div class='title'>keywords</div>");
  for (var i=0; i<=$("#TFquestion li").length; i++){
	st = String(i)
  	$("#TFquestion li").eq(i)
	.append('<br><input type="radio" name="q'+st+'" value=1 id="q'+st+'y" class="oxbutton" /><label for="q'+st+'y" class="radio">○</label><input type="radio" name="q'+st+'" value=0 id="q'+st+'n" /><label for="q'+st+'n" class="radio">×</label>');
  };
  $('.inter li a').attr("href",function(i,val){
    return location.origin + "/hajiloji" + val;
  });
　$('.target_blank a').attr("target='_blank'");
  $(document).on('click','#titlebar',function(){
    document.location = location.origin + "/hajiloji/"; 
  });
});
