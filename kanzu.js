const prompt = require('prompt-sync')();
 
 /* Number 1 */
        function fizzBuzz(str1, str2) {
            if ((typeof str1) && typeof str2 === "string") {
                let totalStr = str1.length + str2.length
                if (totalStr%3==0 && totalStr%5==0){
                   return "FizzBuzz" ;
                } else if (totalStr%3==0){
                    return "Fizz"
                }else{
                    return "Buzz"
                }
            } else {
                return "Please use strings";
            }
            
        }
        str1 = String(prompt("Please enter aa string 1 of your choice: "))
        str2 = String(prompt("Please enter aa string 2 of your choice: "))
        console.log(fizzBuzz(str1, str2))

      /* Number 2 */
        function checkAge(year0fBirth){
            const date = new Date();
            age = date - yearOfBirth;
            if (age < 18){
                return "You are a minor "
            }else if (age > 18 && age < 36) {
                return "You are a youth"
            }else{
                return "You are an elder"
            }
        }
        year0fBirth = Number(prompt("Please enter your year of birth: "))
        console.log(checkAge(yearOfBirth))
         

/* Number 3 */
function twoSum(nums, target) {
    for (let i=0; i<nums.length; i++) {
        
        for (let j=i+1; j<nums.length; j++){
           
            if(nums[i] + nums[j] == target){
                return [i, j]
        }
     } 
  }
}
console.log(twoSum([1, 2, 3, 5], 8))

/* Number 4 */


function firstPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        let newStr = str[i]
        let newStr2 = newStr.split("").reverse().join("");
        if (newStr === newStr2) {
            return newStr;
        }
    }
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["abc", "car","racecar", "cool"]));
console.log(firstPalindrome(["abc", "car", "go", "win", "cool"]));


/* Number 5 */
function sortArray(group) {
    let even = []
    let odds = []
    let chars = []
    for (let i = 0; i < group.length; i++) {
        if (group[i] % 2 === 0) {
            even.push(group[i]);

        } else if (group[i] % 2 !== 0) {
            odds.push(group[i]);

        } else if (typeof(group[i]) === "string") {
            chars.push(group[i]);

        }
    }
    const returnObject = {
        odds,
        even,
        chars,
    };
    return returnObject;
}
console.log(sortArray([3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8]))






