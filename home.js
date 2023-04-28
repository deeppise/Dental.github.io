const pop=document.querySelector('.bt1');
const out=document.querySelector('.pop1');
const b=document.querySelector('.body1');
const c=document.querySelector('.close');

pop.addEventListener('click',()=>{
    out.classList.add('active');
    b.classList.add('active1');
})
c.addEventListener('click',()=>{
    out.classList.remove('active');
    b.classList.remove('active1');
    
})