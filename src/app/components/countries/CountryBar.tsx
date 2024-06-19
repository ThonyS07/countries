// import { Link /*useLocation*/ } from "react-router-dom";
//Components
// import Buttons from "../Buttons/Buttons";
// import Logo from "../Logo/Logo";
// import SearchBar from '../SearchBar/SearchBar'
// import FilterByActivities from '../FilterByActivities/FilterByActivities'

import { useActivityStore } from "@/store/activitiesStore";
import Order from "../order/Order";
import Filter from "../filter/Filter";

//Routes
// import pathRoutes from "../../helpers/pathRoutes.helper";
// import SearchBar from "../SearchBar/SearchBar";
// import OrderByPopulation from "../OrderByPopulation/OrderByPopulation";
// import OrderByName from "../OrderByName/OrderByName";
// import FilterByContinent from "../FilterByContinent/FilterByContinent";

const CountryBar = () => {
	const activities = useActivityStore((state) => state.activities);
	const continents = [
		{ name: "Africa" },
		{ name: "Antarctica" },
		{ name: "Asia" },
		{ name: "Europe" },
		{ name: "North America" },
		{ name: "Oceania" },
		{ name: "South America" },
	];
	const orderByName = [
		{
			name: "Order by name",
			value: "allCountries",
		},
		{
			name: "A-Z",
			value: "Ascending",
		},
		{
			name: "Z-A",
			value: "Descending",
		},
	];
	const orderByPopulation = [
		{
			name: "Order by population",
			value: "allCountries",
		},
		{
			name: "Min-Max",
			value: "Ascending",
		},
		{
			name: "Max-Min",
			value: "Descending",
		},
	];
	// const handleActivity = (e) => {
	// 	e.preventDefault();
	// 	e.target.value === "allActivities"
	// 		? dispatch(getAllCountries())
	// 		: dispatch(filterByActivity(e.target.value));
	// 	// setOrder(e.target.value);
	// 	dispatch(changePage(1));
	// };
	const handleActivity = () => {};
	const handleContinents = () => {};
	// const handleContinents = (e) => {
	// 	e.preventDefault();
	// 	dispatch(filterByContinent(e.target.value));
	// 	dispatch(changePage(1));
	// };

	// const alphabeticallyOrder = (e) => {
	// 	dispatch(orderCountriesByName(e.target.value));
	// 	dispatch(changePage(1));
	// };
	// const populationOrder = (e) => {
	// 	dispatch(orderCountriesByPopulation(e.target.value));
	// 	dispatch(changePage(1));
	// };
	return (
		<div className='bg-[#f4effd] pt-[3px] pr-[3px] pb-[15px] pl-[3px] justify-center items-center'>
			<h2 className='pl-[100px'>Countries</h2>
			<div className='flex w-auto justify-center items-center bg-[f4effd] pb-[5px]'>
				<SearchBar />
				<Filter
					handler={handleActivity}
					arr={activities}
					value='allActivities'
					name='All activities'
				/>
				<Filter
					handler={handleContinents}
					arr={continents}
					value='allCountries'
					name='All countries'
				/>
				<Order handler={() => console.log()} arr={orderByName} />
				<Order handler={() => console.log()} arr={orderByPopulation} />
			</div>
		</div>
	);
};

export default CountryBar;
