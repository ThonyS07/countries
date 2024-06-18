//?React
import {useEffect } from "react";

//?Components
// import Card from "../card/Card";
// import Paginated from "../paginated/Paginated";
// import CountryBar from "../countryBar/CountryBar";
//?Styles
import styles from "./Countries.module.css";

//?Redux
// import {
// 	changePage,
// 	getAllCountries,
// 	resetDetail,
// 	getAllActivities,
// } from "../../redux/actions";
import { Country } from "@prisma/client";
import { useCountryStore } from "@/store/countriesStore";

const Countries = () => {
	// const allCountries = useSelector((state) => state.allCountries);
	    const countries = useCountryStore((state) => state.countries);
			useEffect(() => {
				console.log();
			});

	const numberPerPage = 10;
	// const maxPage = Math.ceil(allCountries.length / numberPerPage);
	// const currentPage = useSelector((state) => state.page);
	// const countriesPerPage = () => {
	// 	return allCountries.slice(
	// 		(currentPage - 1) * numberPerPage,
	// 		(currentPage - 1) * numberPerPage + numberPerPage
	// 	);
	// };
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getAllCountries());
	// 	dispatch(resetDetail());
	// 	dispatch(changePage(1));
	// 	dispatch(getAllActivities());
	// 	// dispatch(searchCountry())
	// }, [dispatch]);
	return (
		<div className={styles.content}>
			<CountryBar />
			<div className='grid grid-[repeat(5,auto)] gap-[10px] justify-center'>
				{!countries ? (
					<h4 className={styles.loading}>Loading..</h4>
				) : (
					countries.map((country:Country) => {
						return (
							<Card
								key={country.id}
								id={country.id}
								name={country.name}
								continent={country.continent}
								flag={country.flag}
							/>
						);
					})
				)}
			</div>
			{/* <div className={styles.paginated}>
				<Paginated currentPage={currentPage} maxPage={maxPage} />
			</div> */}
		</div>
	);
};

export default Countries;
