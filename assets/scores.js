//getting info from local storage
var getInfo = localStorage.getItem('highScores')
//console logging values from the local storage
console.log(getInfo)

//refering to the UL which I will be appending my li's to
var playerList = document.getElementById('playerList')


// oposite of stringify ==> JSON.parse
//loop over get info
//for each loop create an li and change li into text content inside the array
//append it 

//convert text into javaScript objects (converting string bach to array)
var list = JSON.parse(getInfo);
//console logging to see difference between parse and string
console.log(list)
// document.getElementById('playerList').innerHTML = obj.name + ", " + obj.highScorearray
// looping over the array starting from the first index
for (var i = 0; i < list.length; i++) {
// console logging the value of each index
    console.log(list[i])
    // putting each index in a variable (player)
    var player = list[i]
    
    var li = document.createElement('li')
    li.innerText=player
    playerList.appendChild(li)
    
}
































/* backup 1

var getInfo = localStorage.getItem('highScores')
console.log(getInfo)

var playerList = document.getElementById('playerList')
document.createElement('li')

var li = document.createElement('li')
li.innerText=getInfo

playerList.appendChild(li)


// oposite of stringify ==> JSON.parse
//loop over get info
//for each loop create an li and change li into text content inside the array
//append it 

//convert text into javaScript objects
var list = JSON.parse.highScoreArray;
// document.getElementById('playerList').innerHTML = obj.name + ", " + obj.highScorearray
list.getItem("highScores", JSON.parse(highScoreArray))


*/