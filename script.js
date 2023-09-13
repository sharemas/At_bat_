console.log('hi!');
function sleepIn(weekday, vacation){
    return !weekday || vacation;
  }

function monkeyTrouble(aSmile, bSmile){
    return aSmile && bSmile || !aSmile && !bSmile;
    
  }

function sumDouble(a, b){
    if (a == b){
      return 2 * (a + b);
    }
    return a + b;
  }

function frontBack(str){
    if (str.length >= 2){
      let front = str.charAt(0);
      let back = str.charAt(str.length - 1);
      return back + str.substring(1, str.length - 1) + front;
    } else {
        return str;
  
    }
    
  }

function intMax(a, b, c){
    if (a > b && a > c){
      return a;
    } else if (b > c){
      return b;
    }else {
      return c;
    }
    
  }
function arrayCount9(nums){
    let num9 = 0;
    for (let i = 0; i < nums.length; i ++) {
      if (nums[i] == 9) {
        num9++;
      }
    }
    return num9;
  }

function array667(nums){
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++){
      if (nums[i] == 6 && (nums[i + 1] == 6 || nums[i + 1] == 7)){
        count++;
      }
    }
    return count;
        
    
  }

function squirrelPlay(temp, isSummer){
    if (isSummer){
       return temp <= 100 && temp >= 60;
    } else {
      return temp <= 90 && temp >= 60;
    }
  
    
  }

function withoutDoubles(die1, die2, noDoubles){
    if (noDoubles && die1 == die2){
      if (die1 == 6){
        die1 = 1;
      } else{
      die1++;
      }
    }
    return die1 + die2;
      
      
    
  }

function greenTicket(a, b, c){  
    if (a == b == c){
      return 20;
    }
    if (a == b || b == c || a == c){
  
    
    }
  }
  
function blackjack(a, b){
    if (a > 21 && b > 21){
      return 0;
    }
    if (b > 21 || (a <= 21 && a > b)){
        return a;
        }
    if (a > 21 || (b <= 21 && b > a)){
        return b;
        }
  
    
  }
  
  function makeChocolate(small, big, goal){
    let maximumBig = Math.min(Math.floor(goal / 5), big);
    let remainder = goal - (5 * maximumBig);
    
    if (remainder <= small){
      return remainder;
    }
    return -1;
    
  
      
    
  }
