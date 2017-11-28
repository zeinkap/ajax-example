var input = document.querySelector('#user-gif-search');
var searchBtn = document.querySelector('#submit-gif-search');
var gifContainer = document.querySelector('#gif-result-container');

function findGifs(userInput) {
  // fetch goes out and gets data from the URL, ajax call, q is the query search
  fetch("https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC&limit=15")
    // we will use ajax to load the information
    .then(function(response) { // then is a method
      // response is what we get back from the fetch
      return response.json(); // converts to JSON so we can easily access objects and properties
    }) // semicolons stops chaining so don't put it here
    .then(function(response) {
      // to show only data and ignore other features
      showGifs(response.data);
    });
} //closes findGifs function

  function showGifs(data) {
    gifContainer.innerHTML = ''; //this clears out gif container if there is any content there
    for (var x = 0; x < data.length; x++) {
      var img = document.createElement('img');
      img.src = data[x].images.original.url;
      // add element to the end of it
      gifContainer.appendChild(img);
    }
  }

  searchBtn.addEventListener('click', function() {
    var userInput = input.value;
    if (userInput !== '') {
      findGifs(userInput);
    }
  });
