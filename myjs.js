var next_symbol=["images/x.png","x"];
var wins = [
    new Map([[1,"n"],[2,"n"],[3,"n"]]),
    new Map([[4,"n"],[5,"n"],[6,"n"]]),
    new Map([[7,"n"],[8,"n"],[9,"n"]]),
    new Map([[1,"n"],[4,"n"],[7,"n"]]),
    new Map([[2,"n"],[5,"n"],[8,"n"]]),
    new Map([[3,"n"],[6,"n"],[9,"n"]]),
    new Map([[1,"n"],[5,"n"],[9,"n"]]),
    new Map([[3,"n"],[5,"n"],[7,"n"]]),
];
function check(item){
    document.getElementById(item).setAttribute("src",next_symbol[0]);
    document.getElementById(item).parentElement.style.pointerEvents="none";
    fill_win(item);
    if(next_symbol[0]=="images/x.png"){
        next_symbol[0]="images/o.png";
        next_symbol[1]="o";
    }
    else{
        next_symbol[0]="images/x.png";
        next_symbol[1]="x";
    }
}
function fill_win(item){
    console.log(item);
    for(var w in wins){
        if(wins[w].has(item)){
            wins[w].set(item,next_symbol[1]);
        }
    }
    console.log("wins");
    for(var a in wins)
        console.log(wins[a]);
    isWinner();
}
function isWinner(){
    let val="";
    for(var x in wins){
        var arr = wins[x].values();
        val+=arr.next().value
               +arr.next().value
               +arr.next().value;
        console.log(val);
        if(val=="xxx" || val=="ooo"){
            declareWinner();
            break;
        }
        val="";
    }
}
function declareWinner(){
    document.getElementById("winner").innerHTML=next_symbol[1];
    document.getElementById("tic-tac-toe-overlay").classList.add("active");
}
function reset(){
    next_symbol=["images/x.png","x"];
    items=[1,2,3,4,5,6,7,8,9];
    for(var i in items){
        document.getElementById(items[i]).setAttribute("src","images/blank.png");
        document.getElementById(items[i]).parentElement.style.pointerEvents="all";
    }
    document.getElementById("winner").innerHTML=" ";
    document.getElementById("tic-tac-toe-overlay").classList.remove("active");
    wins = [
        new Map([[1,"n"],[2,"n"],[3,"n"]]),
        new Map([[4,"n"],[5,"n"],[6,"n"]]),
        new Map([[7,"n"],[8,"n"],[9,"n"]]),
        new Map([[1,"n"],[4,"n"],[7,"n"]]),
        new Map([[2,"n"],[5,"n"],[8,"n"]]),
        new Map([[3,"n"],[6,"n"],[9,"n"]]),
        new Map([[1,"n"],[5,"n"],[9,"n"]]),
        new Map([[3,"n"],[5,"n"],[7,"n"]]),
    ];
}