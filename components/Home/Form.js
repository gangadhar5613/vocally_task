import { useState, useEffect } from "react";



function Form()
{
  
  const initialValues = {
    fullName: "",
    email: "",
  };

  const initialErrorMessages = {
    fullName: null,
    email: null,
    isAttempted: false,
  };

  const responseMessage = {
    res: null,
    message:''
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessages, setFormMessage] = useState(initialErrorMessages);
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseSer, setReponse] = useState(responseMessage);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name)
    {
    
      case "fullName":
        setFormMessage({
          ...errorMessages,
          [name]: value.length > 3 ? "" : " Please enter a valid name",
        });
        setFormValues({ ...formValues, [name]: value });
        break;
      
      case "email":
        setFormMessage({
          ...errorMessages,
          [name]: emailValidation(value) ? "" : " Please enter a valid name",
        });
        setFormValues({ ...formValues, [name]: value });
        break;

      default:
        break;
    }
  };

  const emailValidation = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  const errorMessageDisplay = (message) =>
    {  
      setInterval(() => {
          setReponse(responseMessage)
      }, 6000);
  }
    
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    
    if (formValues.fullName == '' || formValues.email == '')
    {
      setFormMessage({...errorMessages, isAttempted:true})
    }
    
    try
    { 
      
      if ((formValues.fullName && formValues.email) && (!errorMessages.fullName && !errorMessages.email))
      {
        
        setIsSubmit(true);
          const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
            "Content-Type": "application/json",
              },
          });
          
          const data = await response.json();
          (response.status == 200 ? setReponse({ ...responseSer, res: true }) : setReponse({ ...responseSer, message: data.message }))
          
            setFormValues(initialValues)
            setIsSubmit(false)
            setFormMessage({ ...errorMessages, isAttempted: false })
            errorMessageDisplay();
      }
      } catch (error)
      {
        throw (error)
      }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="md:justify-between flex h-3/6 mt-3 w-full md:mt-0.5 md:pt-0 pt-6 flex-col md:flec-col md:items-start md:w-full items-center justify-center">
          
        <div className="flex flex-col w-5/6 h-1/2 ">
            <input
              name="fullName"
              onChange={handleChange}
              className="border border-gray-600 md:w-5/6  text-gray-400 bg-black w-full rounded-full p-2 pl-4 pb-4 pt-4 pr-3 mt-3"
              type={"text"}
              value={formValues.fullName}
              placeholder="Enter Your Name"
            ></input>
            <span className="text-red-500 t1">
              {errorMessages.fullName}
            </span>
        </div>
        
        <div className="flex mt-4 flex-col h-1/2 w-5/6">
            <input
              name="email"
              onChange={handleChange}
              value={formValues.email}
              className="border border-gray-600 text-gray-300 md:w-5/6 bg-black w-full  rounded-full p-2 pl-4 pt-4 pb-4 pr-3 mt-3"
              type={"text"}
              placeholder="Enter Your Name"
            ></input>
            <span className="text-red-500 text-sm my-1">
              {errorMessages.email}
            </span>
        </div>
        
        <div className="w-5/6 md:w-full md:mt-4">
            <button className={`${isSubmit ? 'bg-purple-800': ''}
              hover:border-none w-full mt-4 p-2 pt-4 md:mt-1 pb-4  md:text-center md:hover:bg-purple-800 md:hover:cursor-pointer md:hover:border-none border md:w-4/6 border-gray-600 rounded-full text-gray-400 font-bold hover:bg-purple-700`}>
              {isSubmit ? 'Capturing...' : 'Submit'}
            </button>
        </div>
          
        <div>
            <span className={responseSer.res  ? "text-green-500 text-sm font-semibold": (responseSer.message ? "text-red-500 text-sm font-semibold":'')}>
              {responseSer.message ? responseSer.message : (responseSer.res ? 'Your response has been successfully captured' : '')}
            </span>
            <span className={errorMessages.isAttempted  ? "text-red-500 text-sm font-semibold":'hidden'}>
              Please fill the required details
            </span>
        </div>
      </form>
       
    </>
  );
}

export default Form;
