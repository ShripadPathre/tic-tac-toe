let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebt=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true; //player0
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turn0 == true) {
      box.innerText = "O";
      turn0 = false;
    } else {
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
  });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText='Winner is, ${winner}';
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of win){
        let posval=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;  

        if (posval!="" && posval2!="" && posval3!=""){
            if(posval==posval2 && posval2==posval3){
                // console.log("winner",posval);

                showWinner(posval);
                return true;
            }
        }
    }
};

newGamebt.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);