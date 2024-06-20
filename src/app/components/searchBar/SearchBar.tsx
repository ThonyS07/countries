import React, { useState } from "react";
import styles from "./SearchBar.module.css";

import lupa from "@/app/assets/img/lupa.png";
import Image from "next/image";
// import { countryBackUp } from "../../redux/reducer";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	const handleSubmit = () => {};
	// const handleSearchOptionChange = (e) => {
	// 	e.preventDefault();
	// 	setSearchOption(e.target.value);
	// };

	const handleSearchInputChange = () => {};

	return (
		<div className='flex w-[240px] h-6 shrink-0 rounded-lg border-[1.5px] border-solid border-[#818181] bg-white justify-between items-center overflow-hidden relative'>
			<input
				className='text-[#737373] text-[14px] font-normal leading-[14px] w-[90%] border-none'
				type='search'
				value={searchValue}
				onChange={handleSearchInputChange}
				placeholder='Name...'
			/>
			{/* <select value={searchOption} onChange={handleSearchOptionChange}>
				<option value='Busqueda por nombre'>Busqueda por nombre</option>
				<option value='Busqueda por Actividades'>
					Busqueda por Actividades
				</option>
			</select> */}
			<button
				className='flex w-6 h-6 shrink-0 border-none bg-none overflow-hidden z-10 absolute right-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black '
				onClick={handleSubmit}>
				{/*falta -webkit-transform:scale(1.1); transform:scale(1.1)*/}
				<Image src={lupa} alt='busqueda' />
			</button>
		</div>
	);
};

// export default SearchBar;

export default SearchBar;
