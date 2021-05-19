/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function () {
  $('#post-tweet').submit(function (event) {
    // alert("Handler for .submit() called.");
    event.preventDefault();

    // const tweet = $('#post-tweet')
    console.log("this----", $(this).serialize());
    const data = $(this).serialize();
    console.log("data:", data);

    // $.post("/tweets", data, (data) => {
    //   console.log("line 19 data:", data);
    //   renderTweets(data);
    // });
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: data,
    }).then(function () {
      console.log("data2:", data);
      // renderTweets(data);
    });

  });



  const createTweetElement = function (tweetObj) {
    console.log("");
    const $tweet = $(`<article class="tweet">
  <header>
    <div class="name">
      <img src="${tweetObj.user.avatars}" alt="">
      <h3>${tweetObj.user.name}</h3>
    </div>
    <h4>${tweetObj.user.handle}</h4>
  </header>
  <p>${tweetObj.content.text}</p>
  <footer>
    <div class="time"><span class="need_to_be_rendered" datetime="${tweetObj.created_at}">${tweetObj.created_at}</span></div>
    <div class="reactions">
      <a href=""><i class="fas fa-flag"></i></a>
      <a href=""><i class="fas fa-retweet"></i></a>
      <a href=""><i class="fas fa-heart"></i></a>
    </div>
  </footer>
</article>`);

    return $tweet;
  };


  const renderTweets = function (tweetArr) {
    for (const each of tweetArr) {
      $(`#tweets-container`).prepend(createTweetElement(each));
    }
  };

  const loadTweets = function () {
    $.get("/tweets", function (tweetArr) {
      renderTweets(tweetArr);
    });
  };

  loadTweets()

  //temporary data
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // $(function () {
  //   const $button = $('#load-more-posts');
  //   $button.on('click', function () {
  //     console.log('Button clicked, performing ajax call...');
  //     $.ajax('more-posts.html', { method: 'GET' })
  //       .then(function (morePostsHtml) {
  //         console.log('Success: ', morePostsHtml);
  //         $button.replaceWith(morePostsHtml);
  //       });
  //   });
  // });

  renderTweets(data);


  //event.target[0].value
  //event.target.search.value

})