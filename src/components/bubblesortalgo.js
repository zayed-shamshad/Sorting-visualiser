export default function getanimationbubble(array){
    const animations = [];
    if (array.length <= 1) return array;
   bubbleSortHelper(array,animations);
    return animations;
}
function bubbleSortHelper(array,animations){
    for(let i = 0; i < array.length; ++i){
        for(let j = 0; j < array.length-i-1; ++j){
            if(array[j] > array[j+1]){
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                animations.push([j,array[j+1]]);
                animations.push([j+1,array[j]]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}