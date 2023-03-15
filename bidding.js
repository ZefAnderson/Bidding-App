const bids = [
    {
        user: "User1",
        bid: "$0.00"
    }
]
const currentBid = bids[0];

function currentBids(){
    document.getElementById("bidDisplay").innerHTML = "Let the Bidding Begin";
}
window.onload = currentBids();


function render() {
    document.getElementById("bidDisplay").innerHTML = bids;
}
function placebid1() {
    let text = document.getElementById("user1Bid").value;
    if(text){
        currentBid.push({
            user: "User1",
            bid: "$" + text + ".00"
        })
        render();
    }
    document.getElementById("user1Bid").value = '';
}