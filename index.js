
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white",  "cyan",
  "magenta",
  "lime",
  "indigo",
  "violet",
  "teal",
  "maroon",
  "navy",
  "gold",
  "silver"];
const greet= [
  "Hello",
  "Hi",
  "Hey",
  "Good morning",
  "Good afternoon",
  "Good evening",
  "What's up?",
  "Howdy",
  "Greetings",
  "Namaste"
];

document.body.addEventListener('click',(event)=>{

    const circle=document.createElement('div');
    circle.className="circle";
    const idx1=Math.floor(Math.random()*10);
    const idx2=Math.floor(Math.random()*20);
    circle.innerText=`${greet[idx1]}`;
    circle.style.backgroundColor=`${colors[(idx2+5)%20]}`;
    circle.style.border=`${colors[idx2]} solid ${5}px`;
    //position change;
     const x=event.clientX;
     const y=event.clientY;
     circle.style.left=`${x-25}px`;
     circle.style.top=`${y-25}px`;
     document.body.appendChild(circle);
   //imp for removing div circle;
    setTimeout(()=>{
        circle.remove();
    },5000)
})