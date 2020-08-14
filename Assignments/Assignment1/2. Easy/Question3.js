console.log("Easy - Q3. Replace Vowel with Another Character");

function replaceVowel(arr) 
{
    var temp =  [];
    arr = arr.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < arr.length; i++) 
    {
        if (vowels.indexOf(arr[i]) < 0) 
        {
            temp.push(arr[i])
        }
        else
        {
            temp.push((vowels.indexOf(arr[i]))+1)
        }
    }
    temp = temp.join('');
    return temp;
  }
  console.log(replaceVowel('karachi'))
  console.log(replaceVowel('chembur'))
  console.log(replaceVowel('khandbari'))