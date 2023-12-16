const icon = document.getElementById('searchIcon')

icon.addEventListener('click', () => {
    searchInput.classList.toggle('hide')
    searchListF.classList.toggle('hide')
})


let cards = document.querySelectorAll('.box')
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    console.log(search_query)
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("hide");
        } else {
            cards[i].classList.add("hide");
        }
    }
}

let typingTimer;               
let typeInterval = 300;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});