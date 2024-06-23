//? React
import React from "react";
import rightArrow from "../../assets/img/flechaderecha.png";
import rightArrowDisabled from "../../assets/img/flechaderechaoff.png";
import leftArrow from "../../assets/img/flechaizquierda.png";
import leftArrowDisabled from "../../assets/img/flechaizquierdaoff.png";


import Image from "next/image";

const Paginated = ({ currentPage, maxPage }) => {
	
	const nextPage = () => {
		if (currentPage < maxPage) {
			// dispatch(changePage(currentPage * 1 + 1));
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			// dispatch(changePage(currentPage * 1 - 1));
		}
	};

	return (
		<div className='flex justify-center items-center'>
			<button
				disabled={currentPage <= 1}
				className={
					currentPage <= 1
						? "flex w-6 h-6 border-black bg-none overflow-hidden right-[5px] cursor-not-allowed"
						: "flex w-6 h-6 border-none bg-none overflow-hidden right-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black transform hover:scale-[1.1]"
				}
				onClick={prevPage}>
				<Image
					src={currentPage <= 1 ? leftArrowDisabled : leftArrow}
					alt='back'
				/>
			</button>
			<h4 className={styles.pageFont}>
				{currentPage}/{maxPage}
			</h4>
			<button
				disabled={currentPage >= maxPage}
				className={
					currentPage >= maxPage
						? "flex w-6 h-6 border-black bg-none overflow-hidden right-[5px] cursor-not-allowed"
						: "flex w-6 h-6 border-none bg-none overflow-hidden right-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black transform hover:scale-[1.1]"
				}
				onClick={nextPage}>
				<Image
					src={currentPage >= maxPage ? rightArrowDisabled : rightArrow}
					alt='front'
				/>
			</button>
		</div>
	);
};

export default Paginated;
