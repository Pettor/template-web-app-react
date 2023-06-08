export function getMonthName(date: Date): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames.at(date.getMonth()) || "";
}

export function getMonthNameShort(date: Date): string {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return monthNames.at(date.getMonth()) || "";
}

export function getWordyDateFormat(date: Date, short = false): string {
  const monthName = short ? getMonthNameShort(date) : getMonthName(date);
  const day = date.getDate();
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
}
