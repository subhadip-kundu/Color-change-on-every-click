const btn =document.getElementById("magic-btn");
const randomColor = () =>{
    let value="0123456789ABCDEF";
    let generate="#";
    for(let i=0;i<6;i++){
        generate = generate + value[Math.floor((Math.random())*16)];
    }
    return generate;
};

function changeRandomColor(){
    document.body.style.backgroundColor=randomColor();
}

btn.addEventListener("click",changeRandomColor);