import React from "react";

import button from "../../assets/img/bin.png";
import Image from "next/image";
import { Activity } from "@prisma/client";

interface ActivityCardProps {
	name: string;
    duration: number;
    id: string;
    key: string;
	difficulty: number;
	season: string;
	deleteActivity: (name:String) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
	name,
	duration,
	difficulty,
	season,
	deleteActivity,
}) => {
	return (
		<div className='w-[200px] h-60 flex pb-0 flex-col content-around border-solid border-[#be9ff6] overflow-hidden rounded-[10px] p-[10px] hover:opacity-85'>
			<div className='flex w-[200px] h-[60px] p-0 justify-between items-center text-[#0b0b0b]'>
				<div className='text-[#0b0b0b] text-[10px] font-normal leading-[10px] m-0 pb-0 pl-[10px]'>
					<h2>{name}</h2>
				</div>
			</div>
			<div className='inline-flex pb-0 items-center m-0 rounded-[10px] bg-white text-[#0b0b0b] text-[9px] font-normal leading-[18px] flex-col gap-[5px]'>
				<div className='flex h-6 p-1 justify-center items-center gap-[5px] m-0 rounded-xl border-[1px] border-solid border-[#be9ff6] bg-[#e9dffc]'>
					<h2>Season: {season}</h2>
				</div>
				<div className='flex h-6 p-1 justify-center items-center gap-[5px] m-0 rounded-xl border-[1px] border-solid border-[#be9ff6] bg-[#e9dffc]'>
					<h2>Difficulty: {difficulty}</h2>
				</div>
				<div className='flex h-6 p-1 justify-center items-center gap-[5px] m-0 rounded-xl border-[1px] border-solid border-[#be9ff6] bg-[#e9dffc]'>
					<h3>Duration: {duration}</h3>
				</div>
			</div>
			<div>
				<Image
					className='cursor-pointer w-[25px] h-[25px] mt-[10px] boder-none flex bg-transparent'
					onClick={() => deleteActivity(name)}
					src={button}
					alt='erase button'
				/>
			</div>
		</div>
	);
};

export default ActivityCard;
