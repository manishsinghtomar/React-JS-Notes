import "./App.css";

function App() {
 
  function handleClick(){
     alert(' I am CLicked');
  }

  function handleMouseOver(){
    alert('para k uper mouse leker aaye ho');
  }
 
   function handleInputChange(e){
    // console.log("Input me value change hui hai ")
    console.log("Value till now: ", e.target.value)
   }


   // default behavior of submit : refresh whole page and sent request to the server.
   // preventDefault() stops the default behavior of event.
   function handleSubmit(e){  
   e.preventDefault();       
   //i am writing my custom behaviour down
   alert("Form Submit  kru kya");
  }  

  return (
    <div>

    {/*immediate invocation jese hi component render ho jayega jo bhi code likha hai invoke ho jayega automatically . thats why we should pass refference of function (function name or arrow function) rather than immediate invocation */}
    {/* <button onClick={alert("immediate invocation")}> */}

    <button onClick={()=>alert("button CLick hua hai ( immediate invocation)")}>
    CLick me
   </button>
   <br />
   <br />


   <form onSubmit={handleSubmit}>
    <input type="text"  onChange={handleInputChange}/>
    <button type="submit">Submit</button>
   </form>

   <br />
   <br />
    <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
      I am a Para
    </p>


      <button onClick={handleClick}>
      {/* <button onClick={()=>{alert("I got clicked dear")}}> //this way makes bulky the code and it will not easily to understand */}
         click me
      </button>

      
    </div>
  );
}

export default App; 
