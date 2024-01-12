const togglebutton=document.querySelector('mybutton');
const divshow=document.querySelector(".loader");
document.getElementById("mybutton").addEventListener("click",func1);
function showloader() {
    divshow.classList.add('loader-show');
}
function hideloader(){
  divshow.classList.remove('loader-show');
}
function func1(){
  
  var final=document.getElementById('job').value;
  var com=document.getElementById('company').value;
  let description=String(final);
  let inter=String(com);
  let start="Write a cover letter for a job description as follows at the company named";
  start=start.concat(" ",inter);
  let query=start.concat("--",description);
  const token = {your_api_key}
  const gpt_result=document.getElementById('cover_letter')
  showloader();
  fetch('https://api.openai.com/v1/chat/completions',{
      method:'POST',
      headers: {
          'Authorization': 'Bearer '+ token,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [
              {
                "role": "system",
                "content": "You are designed for writing cover letters."
              },
              {
                "role": "user",
                "content": query
              }
            ]
      })
  }).then(response => {
      return response.json(); 
  }).then(data => {
      hideloader()
      gpt_result.innerText = data.choices[0].message.content
})
}


