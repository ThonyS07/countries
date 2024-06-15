import React, { useEffect } from 'react'
import { useActivityStore } from "@/store/activitiesStore";
const Activities = () => {
   
    const activities = useActivityStore((state) => state.activities)
    useEffect(() => {
        console.log()
    })
  return (
    <div>
          <div>
              	{!activities ? (
					<h4 className={styles.loading}>'Loading..'</h4>
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
								countries={activity.countries}
								// deleteActivity={deleteA}
							/>
						);
					})
				)}}
      </div>
    </div>
  )
}

export default Activities
