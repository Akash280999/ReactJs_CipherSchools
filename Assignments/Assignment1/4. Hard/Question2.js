console.log("Hard - Q2. Numbers in Strings");

function numInStr(list)
{
    let newlist=[];
    let len=list.length;

    for(i=0;i<len;i++)
    {
        characterArray =  list[i].split("") ;
        let len2=characterArray.length;
        for(j = 0; j< len2;j++)
        {
            if(characterArray[j] >="0" && characterArray[j]<="9") 
            {
                newlist.push(characterArray.join(""));
                break;
            }
        }
    }
    return newlist;
}

console.log(numInStr(["1a","a","2b","b"]));
console.log(numInStr(["abc","abc10"]));
console.log(numInStr(["abc","ab10c","ab10c","bcd"]));
console.log(numInStr(["this is a test", "test1"]));