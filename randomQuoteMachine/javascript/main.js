var quotes = ['The true measure of a man is how he treats someone who can do him absolutely no good.', 'Mother of mercy, is this the end of Rico?', 'I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.', 'Mrs. Robinson, you\'re trying to seduce me. Aren\'t you?', 'If you can\'t get rid of the skeleton in your closet, you\'d best teach it to dance.'];

var sources = ['- Samuel Johnson', '- Little Caesar', '- Sir Winston Churchill', '- The Graduate', '- George Bernard Shaw'];

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c'];

$(document).ready(function() {
    $('.newQuote').click(function(){
      //calculate index
      var index = Math.random();
      index = Math.floor(index*quotes.length);

      $('.quote').fadeOut(500, function(){
          $(this).html(quotes[index]).fadeIn(500);
      });
      $('.source').fadeOut(500, function(){
          $(this).html(sources[index]).fadeIn(500);
      });
      $('body, .myButton').animate({
        backgroundColor: colors[index]
      }, 1000);
      $('.quote, .source').animate({color: colors[index]}, 500);
    });
  $('.twitter').click(function(){
    var quote = $('.quote').html();
    var source = $('.source').html();
    var URL = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + source);
    window.open(URL);
  });
});