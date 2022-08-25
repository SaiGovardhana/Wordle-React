import { useNavigate } from "react-router-dom"


export default function Index()
{  
    let letters='WORDLE'.split('')
    let navigate=useNavigate();
    let colors=['rgb(0,255,4)','rgb(255,0,0)','rgb(255,159,26)','rgb(154,155,147)']
    let styles=[
        {backgroundColor:colors[0],animationDuration:'4s',animationDelay:'1s'},
        {backgroundColor:colors[1],animationDuration:'6s',animationDelay:'4s'},
        {backgroundColor:colors[2],animationDuration:'11s',animationDelay:'3s'},
        {backgroundColor:colors[3],animationDuration:'5s',animationDelay:'6s'},
        {backgroundColor:colors[0],animationDuration:'7s',animationDelay:'5s'},
        {backgroundColor:colors[1],animationDuration:'8s',animationDelay:'2s'}

                ]
    return( 
    <div className="index">
        <div className="logo">
         {letters.map((x,i)=><div key={i} style={styles[i]} className="logo-letter">{x}</div>)}
        </div>
        <h4>A SIMPLE WORD GUESSING GAME</h4>
        <button className="game-end-button" onClick={()=>navigate('/play')} style={{fontWeight:'900'}}><h2>PLAY</h2></button>
    </div>)
}