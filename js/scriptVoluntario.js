$(document).ready(function() {
    $("#search-button").click(function(event){
      const searchTerm = $("#search-input").val();
      const searchURL = `https://www.google.com/search?q=${searchTerm}`;
      window.open(searchURL);
    });
  });