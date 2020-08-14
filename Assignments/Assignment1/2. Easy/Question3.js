console.log("Easy - Q3. Replace Vowel with Another Character");

function replaceVowel(arr) 
{
    var temp =  [];
    arr = arr.split(''); // splits the word into list of characters present
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < arr.length; i++) 
    {
        // if the vowel is found then indexOf gives the index else -1 is returned
        if (vowels.indexOf(arr[i]) < 0) 
        {
            // vowel not found so append in final word
            temp.push(arr[i])
        }
        else
        {
            // vowel found so add one to the index to get the desired output and append in the word
            temp.push((vowels.indexOf(arr[i]))+1)
        }
    }
    temp = temp.join('');
    return temp;
  }
  console.log(replaceVowel('karachi'))
  console.log(replaceVowel('chembur'))
  console.log(replaceVowel('khandbari'))