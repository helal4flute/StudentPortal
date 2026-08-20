(function(){
  const toggle=document.querySelector('.mobile-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links&&links.classList.remove('open')));
})();
