import type { NextPage } from 'next'
import React, { useEffect, useRef } from "react";
import Feed from "./components/feed";
const Home: NextPage = () => {
      
    return (
      <>
        <div className="wrapper">

            <div className="heading">
                <div className="title">
                    <span>Mask Detection KIOSK</span>
                </div>
            </div>

            <div className="feedsContainer">
                <Feed percent="Percentage 1"/>
                <Feed percent="Percentage 2"/>
            </div>

            <div className="dataAndOptions">

                <div className="captureButtonContainer">
                    <button>
                        <span>Capture &#38; Detect</span>
                    </button>
                </div>
                
            </div>


        </div>


        <style jsx>{`

            .feedsContainer {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: space-evenly;
                align-items: center;

                padding: 2rem 0.5rem;
            }

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
