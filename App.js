import React,{useState,useMemo} from "react";

function App() {
  const[num,setNum]=useState(0)
  const[dark,setDark]=useState(false)
  const double=useMemo(()=>{
    return doubleNum(num)
  },[num])
  const themeChange={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  return (
   <>
    <input type="number" value={num} onChange={e=> setNum(parseInt(e.target.value))} />
    <button onClick={()=>setDark(preDark=>!preDark)}>Theme Change</button>
    <div style={themeChange}>{double}</div>
   </>
   
  );
}
function doubleNum(number){
  for(let i=0;i<=100000;i++){}
    return number*2
  
}
export default App;
