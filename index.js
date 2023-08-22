


//Q.1 
// to check if a number is palindrome or not


//  if num is 121 and its reverse is also 121 then its palindrome

// num=1221

// p = num%10 => 1
// q = num/10 => 122

// --> enters loop

// 122%10 = 2 => 2+10 = 12*10  = 120 || p =>(q%10 + p)*10 
// 122/10 = 12  ||  q = q/10

// 12%10 = 2 + 120 => 122*10 = 1220 || p = (q%10 + p)*10
// 12/10 = 1 || q = q/10

// 1%10 = 1 + 1220 = 1221 || p = (q%10 + p)

// checking first if (q%10 + p) === num then breaking the loop


// solution - 1
function palindromeCheck(num) {
    if (num > 0) {
      let p = num % 10 * 10
      let q = Math.floor(num / 10)
      while (q>0) { 
        if (q % 10 + p !== num) {
          p = (q % 10 + p) * 10
          q = Math.floor(q / 10)
        } else {
          console.log(`${num} is a palindrome`)
          return true
          break
        }
      }
      console.log(`${num} is not a palindrome`)
    } else {
      console.log(`${num} is not a palindrome`)
    }
  }
//   palindromeCheck(12021)
  


// Q.2
// given an integer array, return true if any value appears atleast twice and false if all values are distinct
// arr=[1,1,2,3,4] True
// arr=[1,2,3,4] False


// Solution - 2
const checkIsRepeating = (arr) => {
    const freq = {}
    arr.forEach((elem) => freq[elem] ? freq[elem] += 1 : freq[elem] = 1)
    const values = Object.values(freq)
    for (let i = 0; i < values.length; i++) {
      if (values[i] >= 2) {
        return true;
        break;
      }
    }
    return false;
  }
  const res = checkIsRepeating([1, 2, 3, 4, 55, 54, 44, 6, 77, 77])
//   console.log(res)


// Q.3
// given two string s and t , returns true if t is an anagram of s 
// Anagram is a word or phrase formed by rearranging letters of a different word or phrase

// s= anagram t=nagaram
// output: true

const checkAnagram = (s,t)=>{
  
}