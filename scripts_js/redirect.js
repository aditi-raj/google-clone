// places the two buttons in search_input class when input field is
//  clicked so it can shift with autocomplete box
document.getElementById("searchTerm").addEventListener("focus", function () {
    var elementToMove = document.getElementById("button");
    var newContainer = document.getElementById("search");
    newContainer.appendChild(elementToMove);
});

// redirects to google search page when 'google search' button is clicked
function submitform() {
    var searchTerm = document.getElementById("searchTerm").value;
    window.location.href = "http://www.google.com/search?q=" + searchTerm;
}
