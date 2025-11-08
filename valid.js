class Stack{
    constructor(){
        this.items= []
    }
    pop(){
        if(this.isEmpty()) return undefined
       return  this.items.pop()
    }
    push(value){
        this.items.push(value)
    }
    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items.slice().reverse().join("=>"));
    }
}
const bracketChaker = (str) => {
    const stack = new Stack()
    const bracketMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for(let i =0; i< str.length; i++){
        const char = str[i]
        if(char === '(' || char === "{" || char === "["){
            stack.push(char)
        }else if(char === ")" || char === "}" || char === "]"){
            if(stack.isEmpty()){
                return false;
            }
            const expected = bracketMap[char];
            const got = stack.pop()
            console.log("expected: ", expected, "got: ", got);
            if(got !== expected) {
                return false
            }
        }
    }
    // console.log(stack);
    return stack.isEmpty()
}
console.log(bracketChaker("(){}[]"));
console.log(">>>>>>>>>>>>>>");
console.log(bracketChaker("([{})"));