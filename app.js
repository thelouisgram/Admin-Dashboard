const root = document.documentElement;
const mode = document.querySelector('.slider')

mode.addEventListener('click', function(){
    if (root.classList.contains('dark')){
    root.classList.remove('dark')
    }else{
  root.classList.add('dark')  
    }
})