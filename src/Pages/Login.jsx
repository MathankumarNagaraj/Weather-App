
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
  

    const navigate =useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)


    const users = props.users
  
    

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlepInput(evt)
    {
         setEpassword(evt.target.value)
    }

    function checkUser()
    {     
        var userfound = false

        users.forEach(function(item)
        
        {
           if(item.username === eusername && item.password === epassword)

            {    

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
          
        })

        
    if(userfound===false)
        {
            console.log("Login Failed")
            setRuser(false)
        }


    }

    


    return (
        <div className=" flex justify-center p-24 ">
            <div className="container p-10 border w-80 rounded-md shadow-2xl">
                <h1 className="text-3xl  font-medium mb-3">Hey,Climate Keepers! 👋</h1>
                 
                 
                 {ruser?<p className="font-serif"> Get  real-time weather updates after you login:)</p>:<p className="text-red-500">Please Sign up Before you Login</p>}
               
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="border border-black p-1 mt-3 rounded-md"
                        placeholder="username" 
                        onChange={handleUInput}/>

                    <input
                        type="text"
                        className="border border-black p-1 mt-3 rounded-md"
                        placeholder="password" 
                        onChange={handlepInput}/>


                    <button  onClick={checkUser}  className="bg-gray-600 w-28 p-2 mt-5 rounded-md text-white border
                 border-black hover:bg-green-700 button">
                        Login
                    </button>

                    <p className="font-serif mt-4">Don't have an account? <Link to={"/signup"} className="underline" >Sign Up</Link> </p>









                </div>
            </div>
        </div>
    )

}

export default Login