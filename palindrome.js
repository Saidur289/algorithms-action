let str = 'car'
const isPalindrome = (str) =>{
    const normalize = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    const reverse = normalize.split("").reverse().join("")
    // console.log(normalize, reverse);
    if(normalize === reverse){
        return true
    }
    return false
}
// console.log(isPalindrome(str));
const isPalindromeTwoPointer = (str) =>{
 
    const normalize = str.toLowerCase().replace(/[^a-z0-9]/g, "")   
    console.log(normalize);
    let left = 0
    let right = normalize.length - 1 
    while(left < right){
        if(normalize[left] !== normalize[right]){
        return false
    }
    left++;
    right--;
    }
    return true
}
console.log(isPalindromeTwoPointer(str));