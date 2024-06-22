import React, { useEffect } from "react";


import Image from "next/image";
const CountryDetails = () => {


	const countriesDetail = useSelector((state) => state.countriesDetail);
	useEffect(() => {
		// dispatch(countryDetail(id));
		// dispatch(resetCountries());
	}, [ ]);
	const activities = countriesDetail.activities?.map((activity) => {
		return {
			name: activity.name,
			difficulty: activity.difficulty,
			duration: activity.duration,
			season: activity.season,
		};
	});

	return (
		<div className='inline-flex w-[1366px] h-[100%] items-start m-0'>
			{!countriesDetail ? (
				"Loading..."
			) : (
				<div className='inline-flex w-[1366px] h-[100%] items-start m-0'>
					<div className='flex w-[40%] h-[600px] shrink-0 bg-[#f4effd] items-center grid-col-start-1 grid-col-end-3 justify-center'>
						<Image
							src={countriesDetail?.flagImg}
							alt='flag'
							className='{styles.img}'
						/>
					</div>
					<div className='w-[60%] pl-[50px]'>
						<h4 className='text-[#0b0b0b] font-bold text-[24px] leading-[100%]'>{countriesDetail?.name}</h4>

						<div className='flex justify-around flex-col w-[70%]'>
							<h3 className='text-[#0b0b0b] text-[16px] font-normal leading-[18px] grid grid-col-[repeat(2,50%)] justify-evenly mt-[5px] p-0'>
								<span className='text-[#0b0b0b] text-[16px] font-semibold leading-[100%] capitalize p-0 m-0'>Capital: </span>
								<div className='flex content-start'>
									{countriesDetail?.capital}
								</div>
							</h3>

							<h3 className='text-[#0b0b0b] text-[16px] font-normal leading-[18px] grid grid-col-[repeat(2,50%)] justify-evenly mt-[5px] p-0'>
								<span className='text-[#0b0b0b] text-[16px] font-semibold leading-[100%] capitalize p-0 m-0'>Continent: </span>
								<div className='flex content-start'>
									{countriesDetail?.continent}
								</div>
							</h3>
							<h3 className='text-[#0b0b0b] text-[16px] font-normal leading-[18px] grid grid-col-[repeat(2,50%)] justify-evenly mt-[5px] p-0'>
								<span className='text-[#0b0b0b] text-[16px] font-semibold leading-[100%] capitalize p-0 m-0'>Subregion: </span>
								<div className='flex content-start'>
									{countriesDetail?.subregion}
								</div>
							</h3>

							<h3 className='text-[#0b0b0b] text-[16px] font-normal leading-[18px] grid grid-col-[repeat(2,50%)] justify-evenly mt-[5px] p-0'>
								<span className='text-[#0b0b0b] text-[16px] font-semibold leading-[100%] capitalize p-0 m-0'>Area: </span>
								<div className='flex content-start'>
									{countriesDetail?.area} km²
								</div>
							</h3>
							<h3 className='text-[#0b0b0b] text-[16px] font-normal leading-[18px] grid grid-col-[repeat(2,50%)] justify-evenly mt-[5px] p-0'>
								<span className='text-[#0b0b0b] text-[16px] font-semibold leading-[100%] capitalize p-0 m-0'>Population: </span>
								<div className='flex content-start'>
									{countriesDetail?.population} habs
								</div>
							</h3>
						</div>
						<h4 className='text-[#0b0b0b] font-bold text-[24px] leading-[100%]'>Activities: </h4>
						<div className='flex flex-wrap items-start'>
							{activities?.length > 0 ? (
								activities?.map((activity) => {
									return (
										<div className='grid grid-col-[repeat(2,1fr)] grid-row-[repeat(2,1fr)] gap-2 p-1 rounded-xl border border-solid border-[#be9ff6] bg-[#e9dffc] text-[#925ff0] text-[14px] font-normal leading-[18px]' key={activity.id}>
											<div>Name: {activity.name}</div>
											<div>Difficulty: {activity.difficulty}</div>
											<div>Duration: {activity.duration}</div>
											<div>Season: {activity.season}</div>
										</div>
									);
								})
							) : (
								<div className={styles.noActivities}>Without activities</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryDetails;
