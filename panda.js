
// H2 Heading Lime Blue now
const h2 = document.getElementsByTagName('h2')
for (element of h2) {
    element.style.color = 'lightblue'
}


// Back back section will Tomato by using id
const backpackSection = document.getElementById('backpack')
backpackSection.style.backgroundColor = 'tomato'




// card Section find by id and make border radius 30 px
const cardClass = document.getElementsByClassName('card')

// looping for getting class.
for (element of cardClass) {
    element.style.borderRadius = '30px'
}



// Adding Submit button alert...
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    console.log("Pressed Submit Button");
    alert("Pressed Submit button");
})






// Removing div file by clicking by now...
const buyNow = document.getElementsByClassName('button')
for (btn of buyNow) {
    
   
    
    btn.addEventListener('click', (event) => {



    // Removing section...
    const parent = event.target.parentNode.parentNode.parentNode;


    parent.remove();



    })
}









// Disable button attribute Removed...
const inputField = document.getElementById('input-field')
// adding input field function
inputField.addEventListener('keyup', (event) => {
    if (inputField.value == 'email') {
        submit.removeAttribute('disabled')

    }
})







// Changing image.
const blackBag = document.getElementById('image-black-bag')


blackBag.addEventListener('mouseenter', () => {
    blackBag.src = "./images/bags/bag-2.png"
})


blackBag.addEventListener('mouseout', () => {
    blackBag.src = "./images/bags/bag-3.png"
})



// changing color of lets stay in touch section...
const subscribeSection = document.getElementById('Subscribe');


subscribeSection.addEventListener('dblclick', (event) => {
    subscribeSection.style.backgroundColor = 'purple'



})




// changing color of lets stay in touch section...
const input = document.getElementById('inputx');


input.addEventListener('dblclick', (event) => {
    event.stopPropagation();


})










