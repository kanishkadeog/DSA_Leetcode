/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let a=[];
    let p=0;

    for(i=1;i<=n;i++)
    {
        p= fun(i);
        a.push(p);
 
    }
    return a;

    
};
var fun = function(k){
        if(k % 3 === 0 )
    {
        if(k % 5 === 0)
        {
            return "FizzBuzz";
        } else
          {
             return "Fizz";
          }
    }else if(k %5 === 0)
    {
        return "Buzz";
    }else
    {
         return String(k);
    }

    }

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna