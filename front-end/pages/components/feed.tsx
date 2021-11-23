import type { NextPage } from "next"
import React, { useEffect, useRef } from "react"

const Home: NextPage = (props: any) => {
	const videoRef: any = useRef(null)

	useEffect(() => {
		getVideo()
	}, [videoRef])

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({ video: { width: 300 } })
			.then((stream) => {
				let video = videoRef.current
				video.srcObject = stream
				video.play()
			})
			.catch((err) => {
				console.error("error:", err)
			})
	}

	return (
		<>
			<div className="feedContainer">
				<div className="videoFeed">
					<video ref={videoRef} />
				</div>

				<div className="scoreSpanContainer">
					<span className="scoreBox">
						<span className="score">{props.percent}</span>
					</span>
				</div>
			</div>

			<style jsx>{`
				.feedContainer {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 20px;
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

				.scoreSpanContainer {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.scoreBox {
					color: #f03737;
					font-size: 3rem;
				}
			`}</style>
		</>
	)
}

export default Home
