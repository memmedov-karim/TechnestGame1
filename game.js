const scores = document.getElementById("score");
const trynum = document.getElementById("trynum");
const tryy = document.getElementById("try");
const wrongchar = document.getElementById("wrongchar");
const getRandom = () => {
    const data = ['a','b','c','d','r','w','q','p','i','u'];
    const index = Math.floor(Math.random()*data.length);
    return data[index]
}
let score=0;
let trysnum = 0;
let trys = 10-trysnum;
window.addEventListener("keyup",(e)=>{
    let wrong = "";
    const randomchar = getRandom();
    const userchar = e.key;
    if(userchar === randomchar){
        score++;
        scores.innerHTML = score;
        tryy.innerText = 0
    }
    else{
        trysnum++;
        trys--;
        trynum.innerText = trysnum;
        tryy.innerText = trys;
        wrong=(userchar);
        if(!wrongchar.innerText.includes(wrong)){
            wrongchar.innerHTML+=`${wrong},`;
        }  
    }
    if(trys <= 0 && score===0){
        trysnum = 0;
        trys = 10
        console.log("bitdi")
    }
    else if(trys<=0){
        trysnum = 0;
        trys = 10
    } 
})