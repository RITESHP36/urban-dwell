import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
	const [nav, setNav] = useState("true");
	const ToggleNav = () => {
		setNav(!nav);
	};
	return (
		<>
			<div className=" flex justify-between text-white py-2 px-6 backdrop-blur-lg bg-black/50 z-[200]">
				<div className="flex items-center">
					<Link
						smooth={true}
						spy={true}
						activeClass="active"
						className="text-xl font-bold z-[400] cursor-pointer"
						to="home"
					>
						<div>
							Urban<span className="">Dwell</span>
						</div>
					</Link>
				</div>
				<div className="hidden md:flex gap-x-4  text-blue-100  items-center">
					<Link
						smooth={true}
						spy={true}
						activeClass="active"
						to="residencies"
						className="cursor-pointer hover:text-white"
					>
						Residencies
					</Link>
					<Link
						smooth={true}
						spy={true}
						activeClass="active"
						to="ourvalues"
						className="cursor-pointer hover:text-white"
					>
						Our Values
					</Link>
					<Link
						smooth={true}
						spy={true}
						activeClass="active"
						to="contactus"
						className="cursor-pointer hover:text-white"
					>
						Contact Us
					</Link>
					<Link
						smooth={true}
						spy={true}
						activeClass="active"
						to="getstarted"
						className="cursor-pointer hover:text-white"
					>
						Get Started
					</Link>
					<button
						type="button"
						className="text-white bg-blue-600  px-4 py-2 rounded-md  hover:scale-95 duration-200"
					>
						<a href="mailto:UrbanDwell@gmail.com" target="_blank">Contact</a>
					</button>
				</div>
				{/* Menu button */}
				<div className="text-white md:hidden">
					<button onClick={ToggleNav}>
						{nav && <BiMenuAltRight size={30} />}
						{!nav && <AiOutlineClose size={30} />}
					</button>
				</div>
			</div>
			{/* menu */}
			{!nav && (
				<div>
					<div className=" h-screen backdrop-blur-lg bg-black/50">
						{/* Links */}
						<div className="text-white flex flex-col h-full justify-center items-center ">
							<Link
								onClick={ToggleNav}
								smooth={true}
								spy={true}
								activeClass="active"
								to="home"
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Home
							</Link>
							<Link
								onClick={ToggleNav}
								smooth={true}
								spy={true}
								activeClass="active"
								to="residencies"
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Residencies
							</Link>
							<Link
								onClick={ToggleNav}
								smooth={true}
								spy={true}
								activeClass="active"
								to="ourvalues"
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Our Values
							</Link>
							<Link
								onClick={ToggleNav}
								smooth={true}
								spy={true}
								activeClass="active"
								to="contactus"
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Contact Us
							</Link>
							<Link
								onClick={ToggleNav}
								smooth={true}
								spy={true}
								activeClass="active"
								to="getstarted"
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default NavBar;
