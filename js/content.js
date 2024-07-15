$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
});

let number=document.getElementById("number");
let counter=0;
setInterval(()=>{
    if(counter==65){
        clearInterval();
    }else{
        counter+=1;
    number.innerHTML=counter + "%";

    }
    
},30)
// 2000/percentage