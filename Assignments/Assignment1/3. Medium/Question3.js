console.log("Medium - Q3. Remove Duplicates from an Array");

function removeDups(list)
{
    let unique = list.filter((ch, index) => {
        return list.indexOf(ch) === index;
    })
    return unique;
}

console.log(removeDups ([1, 0, 1, 0]));
console.log(removeDups (["The", "big", "cat"]));
console.log(removeDups (["John", "Taylor", "John"]));