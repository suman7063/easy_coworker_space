export const truncate = (str: any, n: any) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export const formatDate = (dateString: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"];

  const date = new Date(dateString);
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek} ${month} ${year}`;
};
