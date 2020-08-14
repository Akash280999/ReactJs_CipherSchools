console.log("Medium - Q1. Reverse Words Starting with a Particular Letter");

function specialReverse(ch,letter)
{
    var arr = ch.split(" ");
    arr.forEach(function(word,index) 
    {
        if(word.startsWith(letter))
        {
            arr[index] = word.split("").reverse().join("");
              
        }                 
    });
    var result = arr.join(" ");
    return result;
}

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon","m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));