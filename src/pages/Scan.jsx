import { useRef, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { sendPhoto } from "../request/api";

const Scan = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const navigate2 = useNavigate();

  const getCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }

    })
      .then(
        stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
          gotMedia;
        })
      .catch(error => {
        console.error("error :", error);
      });

    function gotMedia(mediaStream) {
      const mediaStreamTrack = mediaStream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(mediaStreamTrack);
      console.log(imageCapture.takePhoto());
    }
  };

  const takePhoto = () => {
    const width = 400;
    const height = 500;
    let canvas = document.createElement('canvas');
    let video = videoRef.current;
    let photo = photoRef.current;

    let context = photo.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    let imageDataUrl = canvas.toDataUrl('image/jpeg');
    sendPhoto(imageDataUrl);
  };

  const navToHome = () => {
    navigate2("/")
  };

  const test = () => {
    console.log("working tuoo")
  }

  useEffect(() => {
    getCamera();
  }, [videoRef]);

  return (
    <div>
      <div>
        <video className="w-full h-full" ref={videoRef} ></video>
        <button className="float-left border rounded-full border-red-700 bg-red-700 p-4 m-4" onClick={navToHome}>close</button>
        <button className="float-right border rounded-full border-green-700 bg-green-700 p-4 m-4" onClick={takePhoto}>snap</button>
        <canvas className=" w-full" ref={photoRef}></canvas>
      </div>
    </div>
  )
};


export default Scan;