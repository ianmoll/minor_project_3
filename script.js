function input(num)
{
    var result = document.getElementById("result")
    result.value += num
}


function reset(){
    var result = document.getElementById("result")
    result.value = "";
}
function del(){

    var result = document.getElementById("result")
     var leng = result.value;
     var output = Math.floor(leng/10)
     result.value = output
}

function calc(){
    var result = document.getElementById("result")
    var calcu = eval(result.value)
    result.value = calcu;
   

}