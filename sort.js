const array = [5, 3, 8 , 4, 2] ;
const selectionSort = (array) => {
    for(let i =0; i <array.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;

            }
           
            console.log(array[minIndex], minIndex, "value");
        }
         if(minIndex !== i){
                let temp = array[i]
                array[i] = array[minIndex]
                array[minIndex] = temp
            }
        console.log(`After ${i + 1}`, array);
    }

}
selectionSort(array)