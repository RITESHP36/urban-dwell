import React from "react";
import CustomizedAccordions from "../util/CustomizedAccordions";
import FadeInRight from "../animation/FadeInRight";

const OurValues = () => {
	return (
		<div>
			<div className=" md:grid md:grid-cols-2 my-10">
				{/* left */}
				<div className="flex justify-center px-8 ">
					<FadeInRight>
						<img
							className="rounded-t-full shadow-md shadow-neutral-700  object-cover h-[550px]"
							src="https://real-estate-web.pages.dev/hero-image.png"
							alt=""
						/>
					</FadeInRight>
				</div>
				{/* right */}
				<div className="px-8 mt-5">
					<div className="">
						<h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
							Our Value
						</h2>
						<h2 className="text-2xl font-bold text-blue-800">
							Value We Give To You
						</h2>
						<p className="text-xs sm:text-sm text-neutral-400">
							We are always ready to help by providing the best services for you
							<br />
							We Belive a bood place to live can make your life better
						</p>
					</div>
					{/* Accordian */}
					<div className="mt-2">
						<CustomizedAccordions />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurValues;
