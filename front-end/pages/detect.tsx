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


        <style jsx>{`
        
            .wrapper {
                display: flex;
                flex-direction: column;
                min-height: 99vh;
                padding: 1vh;
            }

            .heading {
                min-height: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .title {
                text-align: center;
                padding: 0.5rem 2rem;
                border: 1px solid #44444444;
            }

            .title span {
                font-size: 2.5rem;
                text-align: center;
            }

            .videoFeed {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .videoFeed video {
                width: 550px;
            }

            .dataAndOptions {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap: wrap;
            }

            .scorebox {
                padding: 0.5rem;
                border: 1px solid #44444444;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                min-width: 260px;
            }

            .scoreTitle {
                font-size: 2rem;
                font-weight: 500;
            }

            .score {
                font-size: 4rem;
                color: #F03737;
            }

            .captureButtonContainer button {
                font-size: 1.5rem;
                background-color: #FFFFFF;
                border: 1px solid #44444444;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                cursor: pointer;
            }

            .captureButtonContainer button:hover {
                transform: scale(1.1);
                transition: all 0.1s ease-in-out;
            }

        
        `}</style>
      
      
      
      </>
    );
}

export default Home
