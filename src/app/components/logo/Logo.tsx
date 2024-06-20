import Image from "next/image";
import logo from "../../assets/img/logo.png";
import styles from "./Logo.module.css";

import React from "react";

const Logo = () => {
	return (
		<div className='flex w-[138px] h-[27px] items-center gap-[5px] shrink-0'>
			<Image src={logo} alt='logo' />
			<h2 className='font-pacifico'> Countries</h2>
		</div>
	);
};

export default Logo;
