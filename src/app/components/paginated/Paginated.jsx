//? React
import React from "react";

//? Styles
import styles from "./Paginated.module.css";
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
		<div className={styles.paginated}>
			<button
				disabled={currentPage <= 1}
				className={currentPage <= 1 ? styles.disabled : styles.pageButton}
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
				className={currentPage >= maxPage ? styles.disabled : styles.pageButton}
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
