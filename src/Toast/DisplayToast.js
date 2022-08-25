import Toastify from 'toastify-js';
export default function displayToast(msg,bg)
{   if(bg===undefined)
        bg='white'   
    Toastify({
        text: msg,
        className: "info",
        duration:2000,
        position:'center',
        gravity:'bottom'
        ,
        stopOnFocus:false
        ,
        style: {
          background: bg,
          color:'black'
        }
      }).showToast();
}