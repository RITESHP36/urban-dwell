import React from "react";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../assets/data";
import { MdLocationOn } from "react-icons/md";
import CountUp from "react-countup";

const settings = {
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6000, // Adjust the autoplay speed (in milliseconds)
};

const Hero = () => {
	return (
		<div>
			<div className="bg-black  pt-10 md:grid md:grid-cols-2 z-[20]">
				{/* left */}
				<div className=" py-10 flex flex-col justify-center ">
					<Slider {...settings}>
						{data.heroapi.map((item, index) => (
							<div key={index} className="z-[20]">
								<div className="text-white py-5">
									<div className="w-3/4 mx-auto">
										<h3 className=" sm:text-5xl text-3xl font-bold">
											{item.title}
										</h3>
										<p className="sm:text-sm text-xs text-neutral-400 py-4">
											{item.disc}
										</p>
									</div>
									<div className="flex  bg-white rounded-md mt-4 gap-x-2 p-2 w-3/4 mx-auto ">
										<MdLocationOn color="blue" size={30} />
										<Typed
											strings={[
												"Houses in New Delhi",
												"Houses in Mumbai",
												"Houses in Chennai",
											]}
											typeSpeed={50}
											backSpeed={50}
											attr="placeholder"
											loop
										>
											<input
												type="text"
												className="focus:outline-none text-gray-500"
											/>
										</Typed>
									</div>
								</div>
							</div>
						))}
					</Slider>
					{/* counter */}
					<div className="text-white flex w-3/4 mx-auto gap-x-2 justify-evenly">
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center gap-x-1 sm:text-3xl text-2xl">
								<CountUp start={8000} end={9000} />
								<span className="text-yellow-500 ">+</span>
							</div>
							<p className="text-neutral-400 text-sm">Premium Products</p>
						</div>
						<div className="flex flex-col items-center justify-center ">
							<div className="flex items-center gap-x-1 sm:text-3xl text-2xl">
								<CountUp start={1000} end={2000} />
								<span className="text-yellow-500 ">+</span>
							</div>
							<div className="">
								<p className="text-neutral-400 text-sm"> Happy Customer</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center gap-x-1 sm:text-3xl text-2xl">
								<CountUp end={28} />
								<span className="text-yellow-500 ">+</span>
							</div>
							<p className="text-neutral-400 text-sm ">Awards won</p>
						</div>
					</div>
				</div>

				{/* right */}
				<div className="flex justify-center items-center py-5">
					{data.heroapi.map((item, index) => (
						<div key={index} className="px-8">
							<img
								className=" object-cover rounded-t-full py-10 flex justify-center "
								src={item.img}
								alt=""
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
