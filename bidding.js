document.getElementById("bidDisplay").onload = showHistory();

function showHistory() {
    let history = JSON.parse(localStorage.getItem("userBids"));
    document.getElementById("bidDisplay").innerHTML = history;
}

const bids = [
    {
        user: "User1",
        bid: "$0.00"
    },
    {
        user: "User2",
        bid: "0.00"
    }
]

function render() {
    let temp = JSON.parse(localStorage.getItem("userBids"));
    let bidsHtml = "<ul class='list-group'>";
    bidsHtml += "</ul>"
    temp.forEach((list) => {
        bidsHtml += `<li class="list-group-item">${list.user} ${list.bid}</li>`;
      });
    document.getElementById("bidDisplay").innerHTML = bidsHtml;
}

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


