export default class GameHandler
{   

    constructor(state,setState,curRow)
    {   this.curRow=curRow;
        this.setState=setState;
        this.inputs=state;
        this.enteredCount=state.length; 
 
    }

    addInput(input)
    {   
        this.setState(prev =>
            {
                    if((this.curRow+1)*5>(prev.length))
                        return [...prev,input];                
                    else
                        return prev
            });
    }
    
    removeInput()
    {     
            this.setState(prev=>
                {   
                    //If the element to be remove belongs to the same row delete it
                    if( this.curRow == Math.floor((prev.length-1)/5))
                        {
                            let next=[...prev]
                            next.pop()
                            return next;
                        }
                    else
                        return prev;
                });
        
    }



    isNewLine()
    {

        return (this.inputs.length>1) && (this.inputs.length%5 == 0);
    }
    getSize()
    {
        return this.inputs.length;
    }


}