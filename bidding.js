const localStorageContent = localStorage.getItem("userBids");
let bids;
if(localStorageContent === null) {
    bids = [];
} else {
    bids = JSON.parse(localStorage.getItem("userBids"));
}

document.getElementById("bidDisplay").innerHTML = 
localStorage.getItem("history");

function placeBid1() {
    let text = document.getElementById("user1Bid").value;
    if(text){
        bids.push({
            user: "User1",
            bid: "$" + text + ".00"
        })
        let serialized = JSON.stringify(bids);
        localStorage.setItem("userBids", serialized);
        render();
    }
    document.getElementById("user1Bid").value = '';
}

function placeBid2() {
    let text = document.getElementById("user2Bid").value;
    if(text){
        bids.push({
            user: "User2",
            bid: "$" + text + ".00"
        })
        let serialized = JSON.stringify(bids);
        localStorage.setItem("userBids", serialized);
        render();
    }
    document.getElementById("user2Bid").value = '';
}

function render() {
    let bidsHtml = "<ul class='list-group'>";
    bidsHtml += "</ul>"
    bids.forEach((list) => {
        bidsHtml += `<li class="list-group-item">${list.user} ${list.bid}</li>`;
      });
    localStorage.setItem("history", bidsHtml);
    let history = bidsHtml;
    document.getElementById("bidDisplay").innerHTML = history;
}