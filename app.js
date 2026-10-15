const fontButton=document.getElementById('font');
fontButton.addEventListener('click',()=>{const enlarged=document.documentElement.classList.toggle('large');fontButton.setAttribute('aria-pressed',String(enlarged));fontButton.textContent=enlarged?'恢復文字 A':'放大文字 A＋';});
let closedDetails=[];
window.addEventListener('beforeprint',()=>{closedDetails=[...document.querySelectorAll('details:not([open])')];closedDetails.forEach(d=>d.open=true);});
window.addEventListener('afterprint',()=>closedDetails.forEach(d=>d.open=false));
document.getElementById('print').addEventListener('click',()=>window.print());
