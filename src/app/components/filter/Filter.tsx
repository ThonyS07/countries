import React from "react";
import styles from "./Filter.module.css";
import { Activity } from "@prisma/client";

interface filterArr {
	name: string;
}

interface FilterProps {
	handler: () => void;
	arr: filterArr[];
	value: string;
	name: string;
}
const Filter = ({ handler, arr, value, name }: FilterProps) => {
	return (
		<div className='w-[223px] h-6 rounded-lg border-[1.5px] border-solid border-[#818181] bg-white justify-between items-center'>
			<select
				className="block h-6 text-[14px] font-normal text-[#737373] leading-[18px] w-[400px] box-border m-0 border border-solid border-[#aaa] shadow-[0_1px_0_0.5px_#00000008] rounded-lg appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.7em_top_50%] bg-[0.65em_auto,100%] haver:bg-[#888] focus:bg-[#aaa] focus:shadow-[0_0_1px_1px_#3b99fcb3] focus:text-[#222] outline-none"
				onChange={handler}>
				<option className='font-normal' value={value} selected>
					{name}
				</option>
				{arr.map((element) => (
					<option
						className='font-normal'
						value={element.name}
						key={element.name}>
						{element.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Filter;
