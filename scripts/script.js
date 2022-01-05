var insults = [ "Oh sorry I didn't notice you there.", "Sorry I thought I sneezed you out, I didn't expect you to talk.", "Gravel is more interesting than you.", "You puny mortal!", "Your worst fear must be a mirror?", "In some cases, like this one, I am glad of the social distancing rule.", "Anything that doesn't kill you disappoints me.", "You are a disgrace to the name of humanity.", "If I am stupid that makes you unbelievably stupid.", "I feel sorry for your family having to put up with you.", "My happy place is anywhere that you're not.", "I had the worst nightmare ever, it was about you.", "You petty humanoid!", "I wish I never met you.", "I feel like I'm in a horror movie when I'm even in a 100 metres of you.", "My eyes are hurting, do you know why? Oh yeah because I looked at your face." ];
var whatWeWillDo = [ "Stomp on all your pasties.", "Move everything left 2 inches." ];
var whyWeWillDo = [ "Because ginger is a colour.", "Because domination suits us more than our own skin." ];
var howItWillAffect = [ "Your skin will turn blue.", "You will crumble into nothing." ]; 

function insultBarrage() {
  var insultIndex = Math.floor(Math.random() * insults.length);
  document.getElementById("insultoutput").innerHTML=insults[insultIndex];
}

function worldDomination() {
  var doIndex = Math.floor(Math.random() * whatWeWillDo.length);
  document.getElementById("whatwedo").innerHTML=whatWeWillDo[doIndex];
  
  var whyIndex = Math.floor(Math.random() * whyWeWillDo.length);
  document.getElementById("whywedo").innerHTML=whyWeWillDo[whyIndex];
  
  var affectIndex = Math.floor(Math.random() * howItWillAffect.length);
  document.getElementById("affectyou").innerHTML=howItWillAffect[affectIndex];
}