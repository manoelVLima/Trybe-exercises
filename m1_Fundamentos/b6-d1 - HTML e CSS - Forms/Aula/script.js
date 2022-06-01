// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");




HREF_LINK.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(event)
});

INPUT_CHECKBOX.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(event);
})

INPUT_TEXT.addEventListener('keypress',(event) => {
    const a = event.key;
    if(a !== 'a'){
        event.preventDefault();
    }
        
})