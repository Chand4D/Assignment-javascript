function calculateRectangle(){
   const rectangleWidth=document.getElementById('width') 
const rectangleValue=rectangleWidth.value;
const type =parseFloat(rectangleValue)
console.log(type);

const rectangleLength=document.getElementById('length')
const lengthValue=rectangleLength.value;
const dhorgho=parseFloat(lengthValue)

console.log (dhorgho);

// calculate the area
const Area=type*dhorgho;
console.log('area of the rectangle:',Area);


// display the area
const views=document.getElementById('view')
views.innerText=Area;

}
