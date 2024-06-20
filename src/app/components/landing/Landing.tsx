//? React
import React from "react";


//? Components
// import NavBar from "../NavBar/NavBar";
import styles from "./Landing.module.css";
import Buttons from "../buttons/Buttons";

//? Images
// import logo from "../../assets/img/logo.png";
// import happy from "../../assets/img/girl2x.png";
// import happyInSnow from "../../assets/img/girl22x.png";
// import manGlobe from "../../assets/img/boy2x.png";
import all from "../../assets/img/group.png";

//? Routes
import pathRoutes from "../../helpers/pathRoutes.helper";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
	return (
		<div className='h-auto w-auto grid pt-5 grid-cols-[repeat(12,1fr)] grid-rows-[repeat(8,auto)]'>
			<div className='pt-20 w-[537px] h-[112px] text-[#925ff0] font-pacifico text-[120px] font-normal leading-[80px] col-start-2 col-end-6 row-start-3'>
				Countries{" "}
			</div>
			<div className='text-[#0b0b0b] font-inter text-[80px] font-bold leading-[97px] col-start-2 col-end-6 row-start-4'>
				& Activities
			</div>
			<div className='font-poppins text-[32px] font-normal leading-[100%] col-start-2 col-end-6 row-start-5 pt-2.5 pb-5'>
				Vacations? Come and see where to go.
			</div>
			<div className='col-start-2 col-end-4 row-start-6'>
				<Link href={pathRoutes.COUNTRIES}>
					<Buttons buttonName='Go to Countries' />
				</Link>
			</div>
			<div className='col-start-7 col-end-12 row-start-3 row-end-8'>
				<Image src={all} alt='all' />
			</div>
		</div>
	);
};

export default Landing;
