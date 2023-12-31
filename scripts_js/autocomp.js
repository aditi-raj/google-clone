// getting all required elements
const searchWrapper = document.querySelector(".search_input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".search_button");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

document.getElementById("searchTerm").addEventListener("focus", function () {
    var elementToMove = document.getElementById("button");
    var newContainer = document.getElementById("search");
    newContainer.appendChild(elementToMove);
});

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        // icon.onclick = () => {
        //     webLink = `https://www.google.com/search?q=${userData}`;
        //     linkTag.setAttribute("href", webLink);
        //     linkTag.click();
        // };
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data
                .toLocaleLowerCase()
                .startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return (data = `<li>${data}</li>`);
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
};

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    // icon.onclick = () => {
    //     webLink = `https://www.google.com/search?q=${selectData}`;
    //     linkTag.setAttribute("href", webLink);
    //     linkTag.click();
    // };
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join("");
    }
    suggBox.innerHTML = listData;
}

document.addEventListener("click", function (event) {
    var searchInput = document.getElementById("searchTerm");
    if (event.target != searchInput) {
        // logic to close the autocomplete box
        // $(searchInput).autocomplete("close");
        searchWrapper.classList.remove("active");
        var elementToMove = document.getElementById("button");
        var oldContainer = document.getElementById("form_id");
        oldContainer.appendChild(elementToMove);
    }
});
