
export default function InputHandler(event,gameHandler)
{   
    
    if(event.type=='keyup' || event.type=='click')
    {   let key=null;
        if(event.type=='keyup')
            key=event.key;
        if(event.type=='click')
        {
            if(event.target.type!='button')
            {
                console.log('Not a button clicked')
               
            }
            
                key=event.target.innerText;
                if(key=='\u{232B}')
                    key='Backspace';
                if(key=='\u{23C3}')
                    key='Enter';
            

        }
        if(key ==='Backspace')
        {
        gameHandler.removeInput();
        return;
        }
        console.log('here')
        if(key.length==1 &&(key.toUpperCase().charCodeAt()>=65) && (key.toUpperCase().charCodeAt()<=90 ))
        {   console.log(gameHandler.getSize())
            if(gameHandler.getSize()<30)
            {  
                gameHandler.addInput(key.toUpperCase())
            }
        }


    }


}