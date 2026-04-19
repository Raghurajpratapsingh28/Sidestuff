import Image, { StaticImageData } from "next/image";

export default function BackgroundImg({ src }: { src: StaticImageData }) {
	return (
		<div className="w-full relative overflow-hidden rounded-[20px] bg-background">
			<div
				className="w-full">
				<Image
					src={src}
					alt="img"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
