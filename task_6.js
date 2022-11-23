alert("Task#6")

var a = prompt("First num: ", "")
var b = prompt("Second num: ", "")
function WriteRepeatedly(value, count){
    for(var i = 0;i<count;i++){
        console.log(value)
    }
}
var cnt = 1;
for(;a<=b;a++){
    WriteRepeatedly(a, cnt)
    cnt++
}

