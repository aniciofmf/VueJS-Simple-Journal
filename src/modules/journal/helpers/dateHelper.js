const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dicember"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDayMonthYear = (datestr) => {
	var date = new Date(datestr);

	return {
		day: date.getDate(),
		month: months[date.getMonth()],
		year: `${date.getFullYear()}, ${days[date.getDay()]}`,
	};
};

export default getDayMonthYear;
