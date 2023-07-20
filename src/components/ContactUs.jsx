import React from "react";
import {
	BiSolidPhoneCall,
	BiMessageDetail,
	BiLogoWhatsapp,
} from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
	return (
		<div>
			<div className="md:grid md:grid-cols-2 ">
				{/* left */}
				<div className="my-10 px-8">
					<h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
						Our Contact Options
					</h2>
					<h2 className="text-2xl font-bold text-blue-800">
						Easy To Contact us
					</h2>
					<p className="text-neutral-600 sm:text-sm text-xs">
						Your satisfaction is our top priority, and we strive to enhance your
						quality of life by providing an excellent living environment.
						Contact us now to experience the difference!
					</p>
					{/* grid */}

					<div className="grid sm:grid-cols-2  w-full gap-6 my-8">
						{/* call */}
						<div className="p-2 flex flex-col gap-2 ring-1 ring-neutral-300 rounded-md hover:scale-110 hover:shadow-md hover:shadow-blue-400 duration-300">
							<div className="flex gap-x-4 ">
								<div className="flex justify-center items-center ">
									<div className="bg-blue-100 h-8 w-8 flex items-center justify-center rounded-lg text-lg text-blue-900">
										<BiSolidPhoneCall />
									</div>
								</div>
								<div className="flex flex-col">
									<p className="text-blue-900 font-semibold">Call</p>
									<p className="text-neutral-500 font-light text-sm">
										+91 542-165-9854
									</p>
								</div>
							</div>
							<div className="bg-blue-200 flex justify-center rounded-md group hover:scale-90 hover:bg-blue-800 duration-200">
								<button className="text-blue-900 group-hover:text-white font-semibold ">
									Call Now
								</button>
							</div>
						</div>
						{/* message */}
						<div className="p-2 flex flex-col gap-2 ring-1 ring-neutral-300 rounded-md hover:scale-110 hover:shadow-md hover:shadow-blue-400 duration-300">
							<div className="flex gap-x-4 ">
								<div className="flex justify-center items-center ">
									<div className="bg-blue-100 h-8 w-8 flex items-center justify-center rounded-lg text-lg text-blue-900">
										<BiMessageDetail />
									</div>
								</div>
								<div className="flex flex-col">
									<p className="text-blue-900 font-semibold">Message</p>
									<p className="text-neutral-500 font-light text-sm">
										+91 542-165-9854
									</p>
								</div>
							</div>
							<div className="bg-blue-200 flex justify-center rounded-md group hover:scale-90 hover:bg-blue-800 duration-200">
								<button className="text-blue-900 group-hover:text-white font-semibold ">
									Message Now
								</button>
							</div>
						</div>
						{/* Whatsapp */}
						<div className="p-2 flex flex-col gap-2 ring-1 ring-neutral-300 rounded-md hover:scale-110 hover:shadow-md hover:shadow-blue-400 duration-300">
							<div className="flex gap-x-4 ">
								<div className="flex justify-center items-center ">
									<div className="bg-blue-100 h-8 w-8 flex items-center justify-center rounded-lg text-lg text-blue-900">
										<BiLogoWhatsapp />
									</div>
								</div>
								<div className="flex flex-col">
									<p className="text-blue-900 font-semibold">WhatsApp</p>
									<p className="text-neutral-500 font-light text-sm">
										+91 645-587-9853
									</p>
								</div>
							</div>
							<div className="bg-blue-200 flex justify-center rounded-md group hover:scale-90 hover:bg-blue-800 duration-200">
								<button className="text-blue-900 group-hover:text-white font-semibold ">
									Message Now
								</button>
							</div>
						</div>
						{/* Mail */}
						<div className="p-2 flex flex-col justify-between gap-2 ring-1 ring-neutral-300 rounded-md hover:scale-110 hover:shadow-md hover:shadow-blue-400 duration-300">
							<div className="flex gap-x-4 ">
								<div className="flex justify-center items-center ">
									<div className="bg-blue-100 h-8 w-8 flex items-center justify-center rounded-lg text-lg text-blue-900">
										<AiOutlineMail />
									</div>
								</div>
								<div className="flex flex-col relative">
									<p className="text-blue-900 font-semibol ">Mail</p>
									<p className="text-neutral-500 font-light text-sm ">
										UD@gmail.com
									</p>
								</div>
							</div>
							<div className="bg-blue-200 flex justify-center rounded-md group hover:scale-90 hover:bg-blue-800 duration-200">
								<button className="text-blue-900 group-hover:text-white font-semibold ">
									Mail Now
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* right */}
				<div className="flex justify-center items-center p-8">
					<img
						className="rounded-t-full shadow-neutral-700  object-cover h-[550px]"
						src="https://real-estate-web.pages.dev/value.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
