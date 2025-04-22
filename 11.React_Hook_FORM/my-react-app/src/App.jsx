import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
   

//isSubmitting flag is true when form is in submitting state
// onSubmit() ko data provide krane ki zimedari handleSubmit ki hai 
  async function onSubmit(data){
    // API call ko simulate karte hai
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form", data);
  }

 //validation rules input field k register k ander pass kiye jate hai 


  //{errors.firstName && <p>{errors.firstName.message}</p>} --> agar firstName me error aata hai toh errors me firstName ka message dikha do

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name: </label>
        <input 
        className={errors.firstName ? 'input-error':""} //if error occurs value of errors.firstName become 'true' and input-error will be added to input as a className.
        {...register("firstName",
        { 
          required: true, 
          minLength:{value:3, message:'Min Len atleast 3'},
          // maxLength:6
          maxLength:{value:6, message:'Max Len atmost 6'}
           })} />
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <br />


      <div>
        <label> Middle Name: </label>
        <input {...register("middleName")} />
      </div>
      <br />


      <div>
        <label> Last Name: </label>
        {/* <input {...register("lastName"), */}
        <input 
        className={errors.lastName ? 'input-error':""}
        {...register("lastName", { 
          pattern: {value: /^[A-Za-z]+$/i,
          message: "Last Name is not as per the rules"
          } 
         })} />
         {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>} 
         {/* agar lastName ka error aaya toh lastName k error ka message p tag me dikha do  */}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting":"Submit"}
       />
    </form>
  );
}

export default App;


//List of validation rules supported:

// required
// min
// max
// minLength
// maxLength
// pattern
// validate