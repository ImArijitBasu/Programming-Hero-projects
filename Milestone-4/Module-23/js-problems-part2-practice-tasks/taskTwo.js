/*
### Task -2: 
Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

---
*/


function smallName(height){
    let small = height[0];
    for(let i = 0 ; i<height.length; i++){
        if( height[i].length < small.length){
            small = height[i];
        }
    }
    return small;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed' ];
console.log(smallName(heights2));
