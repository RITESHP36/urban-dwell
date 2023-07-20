import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Residencies from "./Residencies";
import OurValues from "./OurValues";
import ContactUs from "./ContactUs";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const Home = () => {
	return (
		<div className="">
			<div className="fixed top-0 w-full z-50">
				<NavBar />
			</div>
			<div id="home" className="z-10">
				<div>
					{/* Hero */}
					<Hero />
				</div>
			</div>
			<div id="residencies" className="z-10">
				{/* residencies */}
				<Residencies />
			</div>
			<div id="ourvalues" className="">
				{/* about us */}
				<OurValues />
			</div>
			<div id="contactus" className="">
				{/* contact us */}
				<ContactUs/>
			</div>
			<div id="getstarted" className="">
				{/* get started */}
				<GetStarted/>
			</div>
			<div className="">
				{/* Footer */}
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
