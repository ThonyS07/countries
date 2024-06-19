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
		<div className={styles.filter}>
			<select className={styles.select} onChange={handler}>
				<option className={styles.option} value={value} selected>
					{name}
				</option>
				{arr.map((element) => (
					<option value={element.name} key={element.name}>
						{element.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Filter;
