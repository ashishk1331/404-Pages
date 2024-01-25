import polar from "/public/polar_bear.svg";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<main className="flex flex-row-reverse items-center gap-4 relative h-screen w-full -mt-4 h-screen selection:bg-[#A0D195]">
			<img
				src={polar.src}
				alt="Polar bear background."
				className="absolute -z-10 bottom-0 left-0 -translate-x-4 translate-y-4 w-2/4"
			/>
			<div className="w-1/2 flex flex-col items-left gap-4">
				<p className="w-fit text-2xl">Error 404</p>
				<h1 className="text-6xl font-bold">
					You've reached...
					<br />
					IDK where!
				</h1>
				<p className="text-2xl my-8">Alas, let’s head back to base.</p>
				<button className="w-fit flex items-center gap-3 hover:gap-12 hover:bg-[#A0D195] p-2 transition-all text-xl font-medium border-b-4 border-[#A0D195] pb-1">
					revert
					<ArrowRight size={20} />
				</button>
			</div>
		</main>
	);
}
