
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props) {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()



    function handleUInput(evt) {
        setEusername(evt.target.value)
    }

    function handlepInput(evt) {
        setEpassword(evt.target.value)
    }


    function addUser() {
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")
    }



    return (
        <div className=" p-24 flex justify-center ">
            <div className="container p-10 w-80 border rounded-md shadow-2xl">
                <h1 className="text-3xl  mb-4 font-medium">Hey,Climate Lovers!👋 </h1>
                <p className="font-serif" >Sign Up Here :)</p>

                <div className="flex flex-col gap-4 my-1">
                    <input
                        type="text"
                        className=" border border-black p-1 mt-2 rounded-md"
                        placeholder="username"
                        onChange={handleUInput} />

                    <input
                        type="text"
                        className="border border-black p-1 mt-2 rounded-md"
                        placeholder="password"
                        onChange={handlepInput} />

                    <input
                        type="text"
                        className="border border-black p-1 mt-2 rounded-md"
                        placeholder="confirm password" />

                    <button className="bg-gray-600 w-28 p-2 mt-3 rounded-md text-white border
                 border-black hover:bg-green-700 button" onClick={addUser}>
                        Sign Up
                    </button>

                    <p className="font-serif">Already have an account? <Link to={"/"} className="underline">Login</Link></p>









                </div>
            </div>
        </div>
    )
}

export default Signup