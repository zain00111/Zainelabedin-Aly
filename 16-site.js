(function(){
var d=document.documentElement;
function setLang(l){
  d.lang=l;d.dir=l==="ar"?"rtl":"ltr";
  try{localStorage.setItem("lang",l)}catch(e){}
  if(window.PAGE_TITLES){var s={ar:"حقائق علمية مذهلة",en:"Amazing Science Facts",fr:"Faits Scientifiques Incroyables"};
    document.title=window.PAGE_TITLES[l]+(location.pathname==="/"?"":" | "+s[l]);
    var m=document.querySelector('meta[name=description]');if(m&&window.PAGE_DESCS)m.content=window.PAGE_DESCS[l];}
}
document.querySelectorAll(".lang-switch button").forEach(function(b){b.addEventListener("click",function(){setLang(b.getAttribute("data-lang"))})});
setLang(d.lang||"ar");
var bu=document.querySelector(".burger"),mn=document.getElementById("menu");
if(bu&&mn){bu.addEventListener("click",function(){var o=mn.classList.toggle("open");bu.setAttribute("aria-expanded",o)});
 mn.addEventListener("click",function(e){if(e.target.tagName==="A")mn.classList.remove("open")})}
})();
