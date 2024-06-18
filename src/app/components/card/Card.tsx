//?React
import React from "react";

//? Routes
import pathRoutes from "@/app/helpers/pathRoutes.helper";
import Image from "next/image";
import Link from "next/link";
import { Country } from "@prisma/client";

interface CardProps {
	id: string;
	name: string;
	flag: string;
	continent: string;
}

const Card: React.FC<CardProps> = ({ id, name, flag, continent }) => {
	// const [isFav, setIsFav] = useState(false);

	// const handleFavorite = () => {
	// 	// isFav ? removeFav(id) : addFav(props);
	// 	setIsFav(!isFav);
	// };
	return (
		<div>
			<div className='w-[200px] h-[270px] inline-flex pb-0 flex-col items-start gap-[10px] border-solid border-[#be9ff6] overflow-hidden rounded-[10px]  hover:opacity-85'>
				{/* <div > */}
				<Image className='w-[100%] h-[55%]' src={flag} alt='flag' />
				{/* </div> */}

				<div className='flex w-[200px] h-[60px] py-0 px-[15px] justify-between items-center text-[#0b0b0b]'>
					<Link href={pathRoutes.COUNTRY_DETAILS + `${id}`}>
						<h1 className='text-[#0b0b0b] text-[16px] font-normal leading-[16px]'>
							{name}
						</h1>
					</Link>
				</div>
				<div className='w-[170px] shrink-0 flex px-o py-[15px] justify-start items-center gap-[5px] text-[#0b0b0b] text-[10px] font-normal leading-[18px] '>
					<div className='flex h-6 py-1 px-2 justify-center items-center gap-[5px] rounded-xl border-[1px] border-solid border-[#be9ff6] bg-[#e9dffc] bottom-[-15px]'>
						<h2>{continent}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
