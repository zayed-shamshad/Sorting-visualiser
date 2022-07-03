export default function getanimationselection(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, animations);
    return animations;
}
function selectionSortHelper(array, animations) {
    for (let i = 0; i < array.length - 1; ++i) {
        var min_idx = i;
        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] < array[min_idx])
                min_idx = j;
        }
        animations.push([i, min_idx]);
        animations.push([i, min_idx]);
        animations.push([i, array[min_idx]]);
        animations.push([min_idx, array[i]]);
        let temp = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp;
    }
}