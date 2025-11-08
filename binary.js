// const arr = [3, 5, 6, 7, 9, 11]
// const binarySearch = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1
   
//     while(low <= high){
//     let mid = Math.floor((low + high)/ 2)
//     let  guess =arr[mid]
//     if(guess === target){
//         return mid 
//     }
//     else if(guess > target){
//         high = mid - 1 
//     }else{
//         low = mid + 1 
//     }

//     }
//     return -1
// }
// console.log(binarySearch(arr, 7));
// const arr = [3, 5, 6, 7, 9, 11];
const arr = [2, 4, 6, 8, 10, 12]

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    console.log(`low: ${low}, high: ${high}, mid: ${mid}, guess: ${guess}`);

    if (guess === target) {
      console.log(`✅ Found ${target} at index ${mid}`);
      return mid;
    } else if (guess > target) {
      console.log(`${guess} is greater than ${target}, so move left`);
      high = mid - 1;
    } else {
      console.log(`${guess} is less than ${target}, so move right`);
      low = mid + 1;
    }
  }

  console.log(`❌ ${target} not found in array`);
  return -1;
};

console.log("Final Output:", binarySearch(arr, 3));
