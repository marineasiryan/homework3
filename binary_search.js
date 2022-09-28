function binary_search(arr, x) {

    let start=0, end=arr.length-1;

    while (start <= end){
        let mid=Math.floor((start + end)/2);

        if (arr[mid]===x) {
            return true;
        }

        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}
console.log(binary_search([1,5,9,10,6], 10));




function binary_search_recurs(arr, x, start, end) {
    if (start > end) {
        return false;
    }
    let mid=Math.floor((start + end)/2);

    if (arr[mid]===x){
        return true;
    }
    if(arr[mid] > x){
        return binary_search_recurs(arr, x, start, mid-1);}
    else
        return binary_search_recurs(arr, x, mid+1, end);
}




