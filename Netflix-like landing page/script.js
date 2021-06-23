const tabItems= document.querySelectorAll('.tab-item');
//This way we get a Node list, which is similar
// to an array and we can loop through this.
const tabContentItems=document.querySelectorAll('.tab-content-item');

// SELECT TAB CONTENT ITEM
function selectItem(e) {
    removeBorder();
    removeShowClass();
    //Add border to current tab
    this.classList.add('tab-border');
    //Select content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    // I create  this functions in order to remove
    // the tab-border class, when I select a different tab
    for(let i=0; i<tabItems.length; i++){
        tabItems[i].classList.remove('tab-border')
    }
}

function removeShowClass(){
    for(let i=0; i<tabContentItems.length; i++){
        tabContentItems[i].classList.remove('show');
    }
}

// ********** Tab Click **********
for(let i=0; i<tabItems.length; i++){
    tabItems[i].addEventListener('click', selectItem)
}


