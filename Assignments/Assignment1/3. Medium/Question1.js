console.log("Medium - Q1. Reverse Words Starting with a Particular Letter");

function specialReverse(ch,letter)
{
    var arr = ch.split(" ");    // splits the sentence into list containing words
    // forEach helps to iterate over the list
    arr.forEach(function(word,index) 
    {   
        // lambda function
        if(word.startsWith(letter))
        {
            // if word starts with the given letter then 
            // first it splits into a list containing letters and reverses the whole list so obtained
            // with the help of dot function
            arr[index] = word.split("").reverse().join("");  
        }                 
    });
    var result = arr.join(" ");
    return result;
}

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon","m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));