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

export const convertToTitleCase = (input: string) => {
  return input
    .replace(/([A-Z])/g, " $1") // Insert space before each uppercase letter (if camelCase input)
    .split(/[^a-zA-Z0-9]+/) // Split on non-alphanumeric characters
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join words with a space
};
export const availabilities = ["stream", "free", "ads", "rent", "buy"];

export const navItem = ["popular", "top_rated", "upcoming", "now_playing"];
