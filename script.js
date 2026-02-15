//Count Even numbers
let count = 0;
for(let i = 1 ; i<51; i++){
    if(i%2===0){
        count++;
    }
}
console.log(count);

// Print tables of 7
let num = 7;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

// palindrome
const word = "level";
let reversed = "";
for(let i = 4;i>=0;i--){
    reversed+=word[i];
    if(word===reversed){
        console.log("It is a Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
}

const word = "programming";
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "g") {
    count++;
  }
}

console.log(`Total g: ${count}`);
