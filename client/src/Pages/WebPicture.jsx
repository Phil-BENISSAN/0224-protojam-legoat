import React from "react";
import Webcam from "react-webcam";

const WebPicture = () => {
	const webcamRef = React.useRef(null);
	const [imgSrc, setImgSrc] = React.useState(null);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
	}, [webcamRef, setImgSrc]);

	return (
		<section className="-translate-y-10">
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				className="p-10"
			/>
			<div className="flex justify-center items-center -translate-y-3">
				<button
					onClick={capture}
					className="py-2.5 px-3.5 bg-green-700 rounded-lg text-white active:opacity-85">
					Capturer l'instant
				</button>
			</div>
			<div className="p-10 -translate-y-6">
				{imgSrc && <img src={imgSrc} />}
			</div>
		</section>
	);
};

export default WebPicture;
