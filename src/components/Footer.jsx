import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<div>
			<div className="bg-black mt-8 p-8 md:flex md:justify-between">
				<div className="text-white">
					<div className="text-xl sm:text-2xl font-bold ">Urban Dwell</div>
					<div className="text-neutral-400 text-xs sm:text-sm">
						Our vision is to make all people <br />
						the best place to live for them.
					</div>
				</div>
				<div className="mt-5">
					<div className="flex flex-col items-center md:items-end ">
						<p className="text-white">© Ritesh Pradhan</p>
					</div>
					<div className="text-white mt-2 flex gap-x-2 md:justify-end justify-center text-xs sm:text-sm">
						<Link
							smooth={true}
							spy={true}
							activeClass="active"
							to="residencies"
							className="cursor-pointer"
						>
							Residencies
						</Link>
						<Link
							smooth={true}
							spy={true}
							activeClass="active"
							to="ourvalues"
							className="cursor-pointer"
						>
							Our Values
						</Link>
						<Link
							smooth={true}
							spy={true}
							activeClass="active"
							to="contactus"
							className="cursor-pointer"
						>
							Contact Us
						</Link>
						<Link
							smooth={true}
							spy={true}
							activeClass="active"
							to="getstarted"
							className="cursor-pointer"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
