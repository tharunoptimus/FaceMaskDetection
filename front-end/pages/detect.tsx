import type { NextPage } from 'next'
import React, { useEffect, useRef } from "react";

const Home: NextPage = () => {
    const videoRef: any = useRef(null);

    useEffect(() => {
      getVideo();
    }, [videoRef]);
  
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error("error:", err);
        });
    };
  
    return (
      <>
        <div className="wrapper">

            <div className="heading">
                <div className="title">
                    <span>Mask Detection KIOSK</span>
                </div>
            </div>

            <div className="videoFeed">
                <video ref={videoRef} />
            </div>

            <div className="dataAndOptions">
                <div className="cnnScore scorebox">
                    <span className="scoreTitle">CNN Score</span>
                    <span className="score">N/A</span>
                </div>
                <div className="captureButtonContainer">
                    <button>
                        <span>Capture &#38; Detect</span>
                    </button>
                </div>
                <div className="mobileNetScore scorebox">
                    <span className="scoreTitle">MobileNet Score</span>
                    <span className="score">N/A</span>
                </div>
            </div>


        </div>     
      
      
      </>
    );
}

export default Home
