let mask =document.querySelector('.mask');
       
window.addEventListener('load', () => {
           mask.classList.add('hide');
            setTimeout(()=> {
                mask.remove();
            },600)
        })


/*window.addEventListener('DOMContentLoaded', () => {
           mask.classList.add('hide');
            setTimeout(()=> {
                mask.remove();
            },600)
        })*/
    