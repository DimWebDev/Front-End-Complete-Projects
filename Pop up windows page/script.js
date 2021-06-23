
//*****SELECT ELEMENTS BY SAVING THEM IN VARIABLES */
 const modal=document.querySelector('.modal');
 const overlay=document.querySelector('.overlay');
 const btn=document.querySelector('.close-modal');

 const btnOpenModal=document.querySelectorAll('.show-modal');
 // querySelectorAll gives a Node list which works 
 // similar to an array and can be looped through

 const btnCloseModal=document.querySelector('.close-modal');


 //*******MANIPULATING CLASSES*********** */
 const closeModal =() => {
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
 }

 const openModal=()=>{
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
 }

for(let i=0; i<btnOpenModal.length; i++) {
     btnOpenModal[i].addEventListener('click', openModal);
 }
 
// We do not call the function in the even handler. Instead the function
// is called as soon as the click even is fired
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//*************Keyboard event
//Keyboard events are global events.This is why
// we listen for them in the entire Document, and not 
// on a specific element.

document.addEventListener('keydown', function (e) {

    if (e.code==='Escape') {
        closeModal();
    }
    console.log(e);
})
