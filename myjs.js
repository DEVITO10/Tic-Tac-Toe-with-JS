var next_symbol="images/x.png";
function check(item){
    document.getElementById(item).setAttribute("src",next_symbol);
    document.getElementById(item).parentElement.style.pointerEvents="none";
    if(next_symbol=="images/x.png")
        next_symbol="images/o.png";
    else
        next_symbol="images/x.png";
}
function reset(){
    next_symbol="images/x.png";
    items=[1,2,3,4,5,6,7,8,9];
    for(var i in items){
        document.getElementById(items[i]).setAttribute("src","images/blank.png");
        document.getElementById(items[i]).parentElement.style.pointerEvents="all";
    }
}