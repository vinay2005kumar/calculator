let result = document.querySelector('.result');
result.innerHTML = "0";
let r=result.innerHTML;

let btn = document.querySelectorAll('button');
btn.forEach(function(btn) {
    btn.onclick = function() {
        clicked(btn);
}});

function clicked(clickedButton) {
    let input = clickedButton.innerHTML;
    if(r=='0'){
     result.innerHTML=input;
     r=input;
    }
    else if(input=='clr'){
        result.innerHTML="0";
        r='0';
    }
    else if(input=='='){

        let total=result.innerHTML;
        result.innerHTML=eval(total)
        r=result.innerHTML;
    }
    else if(input=='del'){
        r=result.innerHTML.slice(0,-1);
        result.innerHTML=r;
    }
    else{
    console.log('hi')
    let s=document.querySelector("#sqrt")
    s=JSON.stringify(s);
    console.log(s)
    if(input==s){
        console.log("hi");
    }
    r=r+input;
    result.innerHTML=r;
    
}
}

