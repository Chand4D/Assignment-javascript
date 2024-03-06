
// triangle base value

function calculateTriangle() {
    const triangleBase = document.getElementById('base');
    const triangleBaseText = triangleBase.value;
    const vhume = parseFloat(triangleBaseText)
    console.log(vhume);

    // triangle height value

const triangleHeight=document.getElementById('brazil');
const triangleHeightText=triangleHeight.value;
const height=parseFloat(triangleHeightText)
console.log(height);

// calculate the area

const area=0.5*vhume*height;
console.log('area of the triangle:',area);


// display the answer

const answer=document.getElementById('dekhabo')
answer.innerText=area;

}