const counter=document.querySelector('#counter');
const plusButton=document.querySelector('#plus');
const minusButton=document.querySelector('#minus');
const pauseButton=document.querySelector('#pause');
const likeButton=document.querySelector('#heart');
const form=document.querySelector('#comment-form');
const commentField=document.querySelector('#conmment-input');
const commentList=document.querySelector('#list');
const likeList=document.querySelector('.likes')
const likes ={};

let timmer=setInterval(incrementCount, 1000);

function incrementCount(){
    let counterValue=parseInt(counter.innerText)
    counterValue++
    counter.innerText=counterValue
}
plusButton.addEventListener('click', incrementCount);
//
function decrementCount (){
    let counterValue=parseInt(counter.innerText)
    counterValue--
    counter.innerText=counterValue
}
minusButton.addEventListener('click', decrementCount);

//
function toggleCount(event){
   if (event.target.innerText==="pause"){
       clearInterval(timmer)
       event.target.innerText="restart"
   } else {
    timmer=setInterval(incrementCount,1000)   
    event.target.innerText="pause"
   }
}

pauseButton.addEventListener('click',toggleCount);

//
function increaseLike (event){
    const key=counter.innerText
    if (likes[key]) {likes[key]++}
    else {likes[key]=1}

    for (const key in likes){
        currentItem=document.createElement('li')
      if (currentItem){
         currentItem.innerText=`${key} has been liked ${likes[key]}`
      } else {
          currentItem.innerText=`${key} has been liked ${likes[key]}`
          likeList.append(currentItem)
      }}}

likeButton.addEventListener('click', increaseLike);

//

commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const p = document.createElement("p");
    const input = document.querySelector("#comment-input");
    p.textContent = commentField.value;
    commentList.append(p);
  
    event.target.reset();
  });