export default class GameHandler
{
    constructor(state,setState)
    {
        this.setState=setState;
        this.inputs=state;
        this.enteredCount=state.length
 
    }

    addInput(input)
    {   
        this.setState(prev =>[...prev,input])
    }
    
    removeInput()
    {     
            this.setState(prev=>
                {
                    if(prev.length%5 !=0)
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