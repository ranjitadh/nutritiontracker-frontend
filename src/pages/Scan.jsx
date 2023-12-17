import { useRef, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Webcam from 'react-webcam';

// const Scan = () => {
//   const videoRef = useRef(null);
//   const photoRef = useRef(null);
//   const navigate2 = useNavigate();

//   const getCamera = () => {
//     navigator.mediaDevices.getUserMedia({
//       video: true
//     })
//       .then(
//         stream => {
//           let video = videoRef.current;
//           video.srcObject = stream;
//           video.play();
//           gotMedia;
//         })
//       .catch(error => {
//         console.error("error :", error);
//       });

//     function gotMedia(mediaStream) {
//       const mediaStreamTrack = mediaStream.getVideoTracks()[0];
//       const imageCapture = new ImageCapture(mediaStreamTrack);
//       console.log(imageCapture.takePhoto());
//     }
//   };

//   const takePhoto = () => {
//     const width = 414;
//     const height = width / (16 / 9);

//     let video = videoRef.current;
//     let photo = photoRef.current;

//     let context = photo.getContext('2d');
//     context.drawImage(video, 0, 0, width, height);

//   };

//   const navToHome = () => {
//     navigate2("/")
//   };

//   const test = () => {
//     console.log("working tuoo")
//   }

//   useEffect(() => {
//     getCamera();
//   }, [videoRef]);

//   return (
//     <div>
//       <div>
//         <video className="w-[100%] h-screen" ref={videoRef} ></video>

//         <button className="border rounded-full border-red-700 bg-red-700 p-4 m-4" onClick={navToHome}>close</button>
//         <button className="border rounded-full border-green-700 bg-green-700 p-4 my-4" onClick={takePhoto}>snap</button>

//         {/* <video className="w-[100%] h-screen" ref={videoRef} ></video>
//         <canvas className="w-full fixed bottom-0" ref={photoRef}></canvas> */}
//       </div>
//     </div>
//   )
//};

const Scan = () => {
  return (
    <div className="">
      <Webcam height={600} width={600} />
    </div>
  )
}

export default Scan;