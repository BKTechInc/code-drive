var arr = document.getElementsByTagName('div');
var words = [];
for (var i = 0; i < arr.length; i++) {
    words.push(arr[i].innerHTML.split(" ")[1]);
}
alert(words.sort().join("\n"));