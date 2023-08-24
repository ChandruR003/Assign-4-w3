function getDayOfWeek(dateString) {
    const [month, day, year] = dateString.split("-").map(Number);
    const h = (day + Math.floor((13 * (month + 1)) / 5) + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7;

    const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return daysOfWeek[h];
}
const inputDate = "09-02-1995";
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek);
