$(document).ready(function() {
    $("#search-button").click(function(event){
      const searchTerm = $("#search-input").val();
      const searchURL = `https://www.google.com/search?q=${searchTerm}`;
      window.open(searchURL);
    });
  });

  document.getElementById('search-button').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Evita o comportamento padrão
        document.getElementById('search-button').submit();  // Envia o formulário
    }
});