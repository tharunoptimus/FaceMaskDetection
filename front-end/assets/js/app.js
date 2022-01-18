let net
let video = document.querySelector("#video")

const webcamElement = document.getElementById("webcam")
webcamElement.style.display = "none"
const model = tf.loadLayersModel('./model/model.json').then( _ => console.log("MobileNet v2 Model Loaded"))

let text = document.getElementById("text")

showVideoFeed()
async function app() {
	document.querySelector("h1").innerText = "Downloading the Model..."
	net = await mobilenet.load()

	// Create an object from Tensorflow.js data API which would capture image
	// from the web camera as Tensor.

	setInterval(async () => {
		const webcam = await tf.data.webcam(webcamElement)
		document.querySelector("h1").innerText = ""
		const img = await webcam.capture()
		const result = await net.classify(img)
		if (result[0].className.includes("mask")) {
			isMasked(true)
		} else {
			isMasked(false)
		}
		// Dispose the tensor to release the memory.
		img.dispose()
		// Give some breathing room by waiting for the next animation frame to fire.
		await tf.nextFrame()
	}, 4.7)
}
app()

async function showVideoFeed () {

    // get the video feed
    let stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.srcObject = stream

    // wait for the video to load
    await video.play()

}

function convertImageToGrayScale(image) {
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    let ctx = canvas.getContext("2d")
    ctx.drawImage(image, 0, 0)
    let imageData = ctx.getImageData(0, 0, image.width, image.height)
    let data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3
        data[i] = avg
        data[i + 1] = avg
        data[i + 2] = avg
    }
    imageData.data = data
    ctx.putImageData(imageData, 0, 0)
    let newDataUrl = canvas.toDataURL("image/png")
    console.log(newDataUrl)
    return newDataUrl
}

function getImageType(image) {
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    let ctx = canvas.getContext("2d")
    ctx.drawImage(image, 0, 0)
    let imageData = ctx.getImageData(0, 0, image.width, image.height)
    let data = imageData.data
    let r = data[0]
    let g = data[1]
    let b = data[2]
    let a = data[3]
    if (r === g && g === b) {
        return "grayscale"
    } else if (r === g && g !== b) {
        return "hsl"
    } else {
        return "rgb"
    }
}

function isMasked(value) {
    let maskText = document.querySelector("#masked")
    let noMaskText = document.querySelector("#noMask")

    maskText.style.display = "none"
    noMaskText.style.display = "none"

    requestAnimationFrame(() => {
        value ? maskText.style.display = "block" : noMaskText.style.display = "block"
    })

}