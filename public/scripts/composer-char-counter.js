$(document).ready(function () {
  const tweetBox = $('.tweet-box');
  // let characterCount = 140;
  tweetBox.on('input', function () {
    // characterCount--;
    // console.log(characterCount);
    // console.log($(this).val().length);
    const counter = $('.counter');
    const output = $(this).parent().children().children('.counter')
    // console.log(output);
    // console.log(counter.val());
    // console.log($(this).val().length);
    counter.text(140 - $(this).val().length);
    if (counter.val() < 0) {
      // $('.counter').addClass('negative');
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
  });

  // console.log("yay");















});