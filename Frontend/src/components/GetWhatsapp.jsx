import React, { useEffect } from 'react'

function GetWhatsapp() {
      useEffect(()=>{
      console.log('hit hua')
    getVideo()
  },[])
  
const getVideo = async () => {
  console.log('hit hua')
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
const videoURL = corsProxy + "https://web.whatsapp.com/23835f99-d673-4f96-9b0c-15a1d840f04a";

const res = await fetch(videoURL);
const blob = await res.blob();
const videoSrc = URL.createObjectURL(blob);
document.getElementById("videoPlayer").src = videoSrc;
}
  return (
    <div>GetWhatsapp

         <video id="videoPlayer" controls width="500" height={500}></video>
    </div>
  )
}

export default GetWhatsapp