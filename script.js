
let score=0;
const quotes=[
'Every day is a new beginning.',
'Small progress is still progress.',
'You matter.',
'One calm breath can change a moment.'
Happiness is a conscious choice, an internal state, and often the result of everyday actions. 
Whether you seek wisdom, inspiration, or a quick laugh, these quotes capture the true essence of joy 
from renowned thinkers, leaders, and artists:Perspectives on JoyOn Perspective: 
Quotes from Aristotle and Buddha emphasize that happiness is an internal, 
self-determined journey rather than a destination.On Mindset: Insights from Abraham Lincoln and Ralph Waldo Emerson 
highlight the role of attitude and emotional control in personal contentment.On Harmony & Simplicity:
Philosophers and figures like Gandhi and Schulz suggest happiness is found in aligning thoughts with actions and appreciating simple, daily moments.
];

function recommend(){
let mood=document.getElementById('mood').value;
let r='';
if(mood==='Stressed') r='Try breathing exercise + calm music';
if(mood==='Sad') r='Read quotes + play games';
if(mood==='Tired') r='Watch nature scenery';
if(mood==='Happy') r='Keep spreading positivity';
if(mood==='Angry') r='Listen to music';
if(mood==='Confuse') r='Talk it through with someone';
document.getElementById('result').innerText=r;
}

function quote(){
document.getElementById('quote').innerText=quotes[Math.floor(Math.random()*quotes.length)];
}
