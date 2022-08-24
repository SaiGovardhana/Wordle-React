export default function getWord()
{
    let words=localStorage.getItem('words');
    if (words==undefined)
        {   
              
            console.log('Couldnt find words');

        }
    words=words.split(',');
    return words[Math.floor(Math.random() * words.length)];
    


}