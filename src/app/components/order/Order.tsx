import React from "react";
import styles from "./Order.module.css";
interface OrderOption {
	name: string;
	value: string;
}

interface OrderProps {
	handler: () => void;
	arr: OrderOption[];
}
const Order = ({ handler, arr }: OrderProps) => {
	return (
		<div className='w-[223px] h-[24px] rounded-lg border-[1.5px] border-solid border-[#818181] bg-white flex justify-between items-center'>
			e
			<select
				className="block h-[24px] text-sm font-normal  text-[#737373] leading-[18px] w-[400px] max-w-full box-border m-0 border border-gray-400 rounded-lg bg-white bg-no-repeat bg-right bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] hover:border-gray-500 focus:border-gray-400 focus:shadow-outline focus:outline-none"
				onChange={handler}>
				{arr.map((element) => (
					<option value={element.value} key={element.name}>
						{element.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Order;
