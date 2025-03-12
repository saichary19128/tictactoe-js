let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let newgamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let turn0=true;//playerX,,player0;
// 2d array
const winpatterns=[
        [0,1,2],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true
    }
    box.disabled=true;
    checkwinner();
   });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    } 
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
};
const showwinner=(win)=>{
    msg.innerText=`congratulatons winner is ${win}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner=()=>{
    for( let pattern of winpatterns){
        console.log(pattern);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val.val!=""&& pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);
