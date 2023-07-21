import React from "react";
import FadeInUp from "../animation/FadeInUp";

const GetStarted = () => {
	return (
		<div>
			<FadeInUp>
				<div className="bg-blue-600 p-8 mx-4 rounded-md ring-2 ring-inset ring-blue-400 flex flex-col gap-y-4 items-center ">
					<h2 className="text-xl font-bold  text-white text-center">
						Get Started with UrbanDwell
					</h2>
					<div className="flex flex-col items-center text-neutral-200 sm:text-sm text-xs">
						<p className="text-center">
							Subscribe and find super attractive price quotes from us
						</p>
						<p className="">Find your residence soon</p>
					</div>
					<button className="bg-white/30 shadow-lg px-4 py-2 rounded-md ring-2 ring-white text-white font-semibold hover:scale-105 duration-300">
						<a href="mailto:Urban Dwell@gmail.com" target="_blank">
							Get Started
						</a>
					</button>
				</div>
			</FadeInUp>
		</div>
	);
};

export default GetStarted;
