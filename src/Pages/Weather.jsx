import { useState } from "react"
import axios from "axios";



function Weather() 
{

    const [city,setcity] = useState("")

    const [weather,setWeather] = useState("")

    const [temp,setTem] = useState("")

    const [dec,setDec] = useState("")

    function handleCity(evt)
    {
        setcity(evt.target.value)
       
    }

    function getWeather()
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31e10c393cc1624767ede99b74a22117`)
        
        weatherData.then(function(success){
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setTem(success.data.main.temp)
            setDec(success.data.weather[0].description)
        }).catch(function(errmsg){
            console.log(errmsg)
        })






    }


    
    return (
        <div className="body p-28 flex justify-center  ">  {/*Overall Container Background*/}

            <div className="container w-90 p-10   m-30 justify-center  rounded-md shadow-2xl">

                <h1 className="flex justify-center text-3xl font-bold  mb-4 "> 🌈Weather Report⛅</h1>

                <p className="font-serif">I Can give you a Weather report about your city...!☔🌈❄🌊</p>

                <input onChange={handleCity}
                    className=" border border-black p-1 mt-5 rounded-md "
                    placeholder="Search a City here ">
                </input>

                <button   onClick={getWeather} className="bg-gray-600 p-2 mt-7 rounded-md text-white border
                 border-black hover:bg-green-700 button ">Get Report</button>

                <div className=" font-bold text-[#e5002e] mt-5">

                    <h1>weather ☁️ : {weather}</h1>
                    <h1>Temperature 🌡️ : {temp}</h1>
                    <h1>Description 🗒️ : {dec}</h1>



                </div>

            </div>

        </div>

    )
}

export default Weather