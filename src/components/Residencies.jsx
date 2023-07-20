import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../assets/data";
import { sliderSettings } from "../util/SliderSettings";

const Residencies = () => {
	return (
		<div>
			<div className="mt-10">
				<p className="text-neutral-400 text-2xl font-semibold flex justify-center">
					Trusted Companies
				</p>
			</div>
			<div className="md:flex md:justify-evenly mx-4  grid grid-cols-2 ">
				<div className="  object-cover flex items-center justify-center h-50">
					<img
						src="https://static.india.com/wp-content/uploads/2017/04/indiabulls-real-estate.jpg"
						alt=""
					/>
				</div>
				<div className="  object-cover flex items-center justify-center h-50">
					<img
						src="https://th.bing.com/th/id/R.e55785b5d45a49a2bd9327c44ff03d60?rik=uoOCX9lqHYixoQ&riu=http%3a%2f%2fidealdesigns.in%2fwp-content%2fuploads%2f2014%2f08%2freal-estate-logo-design-hyderabad28.jpg&ehk=9BBzobBl5PcPNq15U%2f2pLc35KEpYrshY8jldrU3nws4%3d&risl=&pid=ImgRaw&r=0"
						alt=""
					/>
				</div>
				<div className="  object-cover flex items-center justify-center h-50">
					<img
						src="https://th.bing.com/th/id/R.6a9815242e5c07cfdc4b6dcc3fa19ee7?rik=VBhcR932ZwJuew&riu=http%3a%2f%2fidealdesigns.in%2fwp-content%2fuploads%2f2014%2f08%2freal-estate-logo-design-bangalore-hyderabad-india1.jpg&ehk=rWrSzg3TCg9v3b0JXeVmWcDTmjEz6YaJMel%2bG9sodVc%3d&risl=&pid=ImgRaw&r=0"
						alt=""
					/>
				</div>
				<div className="  object-cover flex items-center justify-center h-50">
					<img
						src="https://i.pinimg.com/originals/73/3b/90/733b900bfe0f9535f01977c6b1ad15f7.jpg"
						alt=""
					/>
				</div>
			</div>
			<div className="px-10 relative">
				<div className="text-2xl font-bold mt-10 ">
					<div>
						<p className="text-yellow-500">Best Choices</p>
						<p className="text-blue-700 sm:text-3xl ">Popular Residencies</p>
					</div>
				</div>
				<div className="mb-12 ">
					<Swiper {...sliderSettings}>
						<SliderButtons />

						{data.residencies.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="h-80 mb-4 mt-12  duration-300 group hover:shadow-lg hover:shadow-blue-500/50 rounded-lg hover:bg-gradient-to-b from-transparent from-70% to-blue-100">
									<div className="p-2 ">
										<img
											className="h-40 w-full object-cover  rounded-xl"
											src={item.image}
											alt=""
										/>
										<h2 className="flex gap-x-1 text-yellow-600 text-lg py-1 font-semibold">
											{item.price}
										</h2>
										<h1 className="text-xl text-blue-700 font-bold">
											{item.title}
										</h1>
										<p className="text-sm text-neutral-400 ">{item.location}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Residencies;

const SliderButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="z-30 flex rounded-lg gap-x-4 absolute top-0  right-0">
			<button
				className="flex items-center justify-center font-semibold text-neutral-500-500 border-2 shadow-md shadow-blue-500 px-2 py-1 text-lg"
				onClick={() => swiper.slidePrev()}
			>
				&lt;
			</button>
			<button
				className="flex items-center justify-center font-semibold text-neutral-500-500 border-2 shadow-md shadow-blue-500 px-2 py-1 text-lg"
				onClick={() => swiper.slideNext()}
			>
				&gt;
			</button>
		</div>
	);
};
