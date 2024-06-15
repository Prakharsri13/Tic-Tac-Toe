let boxes =  document.querySelectorAll(".box");
let resetbtn =  document.querySelector("#reset-btn");
let newGameBtn  = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg  = document.querySelector("#msg");

let trunO  = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
trunO = true;
enableBoxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(trunO){
            //player O
            box.innerText = "O";
            trunO = false;
        }else{
            //player X
            box.innerText = "X";
            trunO = true;
        }
        box.disabled  = true;
        checkWinner();
    });
});

const disabledboxes  = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes  = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}

const checkWinner  = () =>{
    for(let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let  posval1 = boxes[pattern[0]].innerText; 
        let  posval2  = boxes[pattern[1]].innerText;
        let  posval3  = boxes[pattern[2]].innerText;
        
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                showWinner(posval1);
            }
        }
   }
};

newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);