alert("Task#5")
var temp = 0;
var b = []
var flag = true;
var sum = 0;
do {
    var a = prompt("Enter: ", "")
    if(a==null){
        flag = false
    }else if(!isNaN(a)){
        b[temp] = a;
        sum += parseInt(a);
        temp++;
    } else {
        flag=false;
    }
} while(flag)
alert("Sum:"+sum)