let rigthBnt = document.querySelector('.right'),
    leftBtn = document.querySelector('.left');
let sList = document.querySelector('.hero__lis');
let sliderBlock = document.querySelector('.hero__users');
let slideritem = document.querySelectorAll('.hero__item');
let countLeft = 0;

let idf = 0;
for(let i of slideritem){
  idf += i.offsetWidth;
}


leftBtn.addEventListener('click',function(){
  if(countLeft < 320){
    countLeft += 80;
    sList.style.left = `-${countLeft}px`;
  }
});
rigthBnt.addEventListener('click',function(){
  if(countLeft){
    countLeft -= 80;
    sList.style.left = `-${countLeft}px`;
  }
});
