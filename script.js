function checkVowels() {
    let text2 = document.getElementById('text').value;
    let result2 = document.getElementById('result');
    let error2 = document.getElementById('error');
    result2.textContent = '';
    error2.textContent = '';

    if (!text2) {
      error2.textContent = 'Please enter some text.';
      return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < text2.length; i++) {
      if(vowels.includes(text2[i])) {
        count++;
    

        
        
       
      }
    }

   result2.textContent = 'Number of vowels in the sentence is: ' + count +'';
      document.getElementById('text').value=""
    setTimeout(function() {
      location.reload();
  },3000);
  
  }
   
  
