console.log("Hard - Q1. Get Real Type");

function realType(value)
{
    if (value == null)
        return "null"
    var final = value.constructor.name;
    // console.log(typeof final);
    return final;
}

console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null)); 