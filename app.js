let count=0;
let value=document.getElementById("value");
let btns=document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains("Decrease"))count--;
        if(styles.contains("Increase"))count++;
        if(styles.contains("Reset")) count=0;
        value.textContent=count;
        if (count<0) value.style.color="red";
        if (count>0) value.style.color="green";
        if (count===0) value.style.color="black";
    })
})