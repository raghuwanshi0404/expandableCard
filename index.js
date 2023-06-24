 let panel = document.querySelectorAll('.img_wrapper');
//  console.log(panel);
 panel.forEach(item => {
    // console.log(item)
    item.addEventListener('click', ()=>{
        removeActiveClasses()
        item.classList.add('active')
    })
 });

 function removeActiveClasses(){
    panel.forEach(item => {
        item.classList.remove('active')
    })
 }