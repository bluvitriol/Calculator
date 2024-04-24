const text=document.getElementById("textarea");

function display(input){
    textarea.value += input;
}

function reset(){
    textarea.value="";
}
function Delete(){
    val=textarea.value;
    textarea.value=val.substring(0, val.length-1);
}
function ans(){
    try{
        textarea.value= eval(textarea.value);
    }
    catch(error){
        textarea.value="Error";
    }
}
