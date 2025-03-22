document.addEventListener('DOMContentLoaded',()=>{
  const rightBtn = document.getElementsByClassName('rightBtn');
  const leftBtn = document.getElementsByClassName('leftBtn');
  const nowWatching = document.getElementsByClassName('watching')[0];
  const uniformChangeButton = document.querySelectorAll('.chageUniform')
  
  uniformChangeButton.forEach((img)=>{
    img.addEventListener('click',(event)=>{
      event.preventDefault();
      console.log(img.src);
      nowWatching.src = img.src;
      console.log(nowWatching.src)
    })
  })


})