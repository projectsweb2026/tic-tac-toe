let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnR=false;
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnR===false){
            box.innerText="A";
            turnR=true;
        }
        else{
            box.innerText="R";
            turnR=false;
        }
        box.disabled=true;
        count++;

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


const showWinner=(win)=>{
    msg.innerText=`Congratulations!!!!Winner is ${win}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showdraw=()=>{
    msg.innerText="Match draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
            else{
                if(count === 9){
                    showdraw();
                }
            }
        }


    }

};
const resetgame=()=>{
    count = 0;
    turnR=false;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);