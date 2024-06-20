// REACT
import React from "react";

//Components
import Buttons from "../buttons/Buttons";
import Logo from "../logo/Logo";
// import SearchBar from '../SearchBar/SearchBar'

// Styles
import styles from "./NavBar.module.css";

//Routes
import pathRoutes from "../../helpers/pathRoutes.helper";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className='flex w-auto p-[0px_122px_0px_122px] justify-between items-center bg-white h-[75px]'>
			<Link className='text-[#858a8f] font-inter text-[20px] font-semibold leading-6' href={pathRoutes.LANDING}>
				<Logo />
			</Link>
			<div className='flex p-[12px_24px] justify-center items-center gap-[5px] rounded-[4px] font-[14px] decoration-[none]'>
				<Link className='text-[#858a8f] font-inter text-[20px] font-semibold leading-6' href={pathRoutes.LANDING}>
					Landing
				</Link>
				<Link className='text-[#858a8f] font-inter text-[20px] font-semibold leading-6' href={pathRoutes.COUNTRIES}>
					Countries
				</Link>
				<Link className='text-[#858a8f] font-inter text-[20px] font-semibold leading-6' href={pathRoutes.ACTIVITIES}>
					Activities
				</Link>
			</div>

			<Link className='text-[#858a8f] font-inter text-[20px] font-semibold leading-6' href={pathRoutes.ADD_ACTIVITIES}>
				<Buttons buttonName={"Add Activity"} />
			</Link>
		</div>
	);
};

export default NavBar;
