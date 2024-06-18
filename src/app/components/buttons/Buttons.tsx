import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ buttonName }: { buttonName: string }) => {
	return (
		<div>
			<button
				className='inline-flex pt-4 pr-6 pb-4 pl-8 justify-center items-center gap-[8px] text-white  text-base font-semibold leading-6 rounded bg-[#925ff0] h-10 hover:bg-[#a87ff3]
            '>
				{buttonName}
			</button>
		</div>
	);
};

export default Buttons;
