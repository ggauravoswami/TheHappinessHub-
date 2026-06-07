
let score=0;
const quotes=[
'Every day is a new beginning.',
'Small progress is still progress.',
'You matter.',
'One calm breath can change a moment.'
];

function recommend(){
let mood=document.getElementById('mood').value;
let r='';
if(mood==='Stressed') r='Try breathing exercise + calm music';
if(mood==='Sad') r='Read quotes + play games';
if(mood==='Tired') r='Watch nature scenery';
if(mood==='Happy') r='Keep spreading positivity';
document.getElementById('result').innerText=r;
}

function quote(){
document.getElementById('quote').innerText=quotes[Math.floor(Math.random()*quotes.length)];
}
