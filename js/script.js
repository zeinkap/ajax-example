fetch("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5")
  // we will use ajax to load the information
  .then(function(response) {
    // have to convert to JSON
    return response.json();
  }) // semicolons stops chaining so don't put it here
  .then(function(response) {
    // to show only data
    showGifs(response.data);
  });

  function showGifs(data) {
    for (var x = 0; x < data.length; x++) {
      var img = document.createElement('img');
      img.src = data[x].images.original.url;
      // add element to the end of it
      document.body.appendChild(img);
    }
  }
