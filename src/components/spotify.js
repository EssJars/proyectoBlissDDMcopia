import React from 'react';
import SpotifyBoton from './spotifyboton'
//import { Link } from 'react-router-dom';




const Spotify = () => {
    return ( 
        
        <div className="w-full flex flex-col justify-center">
            <div className="m-12 p-12 flex justify-center">
            <button type="submit" className="p-2 content-evenly inline-flex justify-center items-end border rounded-full text-purple-700 border-purple-600 font-extrabold hover:border-transparent hover:text-teal-500 hover:bg-purple-900 "><SpotifyBoton iconSpot="Spotify" /><span className="text-indigo-500 pb-2 p-2 flex justify-start">Mi playlist</span></button>

            </div>
            <div className=" inline-flex space-x-4 m-5 justify-end">
                <div className=" h-48 flex flex-wrap content-center">
                    <h1 className="indicador-de-pagina"><a href="#">&#60; ACERCA DE MI &#62;</a></h1>
                </div>
                <div className="m-5 p-5 flex-col justify-items-end inline-block">
                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>
                        
                    <div className="p-5">
                        <h1 className="line2"></h1>
                    </div>

                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>

                    <div className="p-5">
                        <h1 className="line"></h1>
                    </div>
                </div>
            </div>
                <div className="m-12 p-12 flex justify-center">
                </div>
        </div>
        

        
)
}
 
export default Spotify