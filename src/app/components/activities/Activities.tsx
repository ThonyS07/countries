import React, { useEffect } from 'react'
import { useActivityStore } from "@/store/activitiesStore";
import ActivityCard from './ActivityCard';
import { Activity } from '@prisma/client';
import ActivityBar from './ActivityBar';
const Activities = () => {
   
    const activities = useActivityStore((state) => state.activities)
    useEffect(() => {
        console.log()
	})
	const deleteA = async (name:String) => {
		// const deleteAlert = await swal({
		// 	tittle: "DELETE ACTIVITY",
		// 	text: "are you sure that do you want to delete this activity?",
		// 	icon: "warning",
		// 	buttons: ["no", "yes"],
		// });
		// if (deleteAlert) {
		// dispatch(deleteActivity(activity));
		// }
	};
  return (
	  <div>
		  <ActivityBar/>
			<div className='grid grid-cols-[repeat(3,auto)] gap-[10px] justify-center '>
				{!activities ? (
					<h4 className=''>Loading..</h4>
				) : (
					activities.map((activity) => {
						return (
							<ActivityCard
								key={activity.id}
								id={activity.id}
								name={activity.name}
								difficulty={activity.difficulty}
								season={activity.season}
								duration={activity.duration}
								// countries={activity.countries}
								deleteActivity={deleteA}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}

export default Activities
