let left=document.getElementById('arrow1');
let right=document.getElementById('arrow2');
let s=document.getElementById('scrol-div');
let main=document.getElementById('main');
let temp=1;

right.addEventListener('click',()=>{
    if(temp==1){
    s.style.transform="translateX(-1280px)";
    temp=2;
    }
    else
    {
        s.style.transform="translateX(-2550px)";
        
        
        }
})
left.addEventListener('click',()=>{
   if(temp==2){
    s.style.transform="translateX(-1280px)";
    temp=1;
   }
     else{
        s.style.transform="translateX(0px)";
     }   
})