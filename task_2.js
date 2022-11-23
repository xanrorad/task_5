alert("Task#2")
var N = prompt('Введите N','N');
    var s = "";
    while (N > 0){
        s += N % 10;
        N = Math.floor(N / 10);
    }
    for (var i = s.length - 1; i >= 0; i--) {
        alert(s[i]);
    }