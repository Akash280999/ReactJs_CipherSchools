console.log("Easy - Q1. Count Instances of a Character in a String");
function charCount (ch,arr) 
{
    var count = 0;
    for (var i=0;i<arr.length;i++) 
    {
        if (arr.charAt(i) == ch) 
        {
            count += 1;
        }
    }
    return count;
}

console.log(charCount ("a", "edabit"));
console.log(charCount  ("c", "Chamber of secrets"));
console.log(charCount  ("b", "big fat bubble"));