let user=document.querySelector(".user");
let answer=document.querySelector(".answer");

//Toggle Button
let toggle=document.querySelector(".toggle");
let body=document.querySelector("body");
let mode=1;
const switchMode=()=>
{
    if(mode===1)
    {
        mode=0;
        body.style.backgroundColor="white";
        toggle.style.backgroundColor="black";
        toggle.style.color="white";
    }
    else{
        mode=1;
        body.style.backgroundColor="black";
        toggle.style.backgroundColor="rgba(15, 177, 241, 0.59)";
        toggle.style.color="orange";
    }
}

toggle.addEventListener("click",switchMode);

//all Buttons
let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let b4=document.querySelector("#b4");
let b5=document.querySelector("#b5");
let b6=document.querySelector("#b6");
let b7=document.querySelector("#b7");
let b8=document.querySelector("#b8");
let b9=document.querySelector("#b9");
let b10=document.querySelector("#b10");
let b11=document.querySelector("#b11");
let b12=document.querySelector("#b12");
let b13=document.querySelector("#b13");
let b14=document.querySelector("#b14");
let b15=document.querySelector("#b15");
let b16=document.querySelector("#b16");
let b17=document.querySelector("#b17");
let b18=document.querySelector("#b18");
let b19=document.querySelector("#b19");

let allButtons=[b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18];
allButtons.forEach((val)=>
{   
    val.addEventListener("click",()=>
    {
        if((user.value)[user.value.length-1]==="+" || (user.value)[user.value.length-1]==='-' || (user.value)[user.value.length-1]==='*' || (user.value)[user.value.length-1]==='/' || (user.value)[user.value.length-1]==='%'){
            console.log(val.innerText)
            if(val.innerText==='+' || val.innerText==='-' || val.innerText==='*' || val.innerText==='/' || val.innerText==='%')
            {
                new2=(user.value).slice(0,-1);
                user.value=new2+val.innerText;  
            }
            else{
                    user.value+=val.innerText;
            }
        }
        else{
        user.value+=val.innerText;
        }
        answer.value=eval(user.value);
    })
})



//buttons working
const bC=()=>
{
    user.value="";
    answer.value="";
}

const btn2=()=>
{
    if((user.value).length>1){
        user.value=(user.value).slice(0,-1);
        if(user.value.slice(-1)==='+' || user.value.slice(-1)==='-' || user.value.slice(-1)==='*' || user.value.slice(-1)==='/' || user.value.slice(-1)==='%'){
            new1=(user.value).slice(0,-1);
            answer.value =eval(new1);
        }
        else{
            
            answer.value=eval(user.value);
        }
    }
    else{
        user.value="";
        answer.value="";
    }
}

const btn19=()=>{
    user.value=eval(user.value);
    answer.value='';
}

b1.addEventListener("click",bC);
b2.addEventListener("click",btn2);
b19.addEventListener("click",btn19);