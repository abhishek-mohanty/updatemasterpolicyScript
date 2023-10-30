function addMonthsToDate(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
}

function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Zero-pad the month
    const day = String(date.getDate()).padStart(2, '0'); // Zero-pad the day
    return `${year}-${month}-${day}`;
}

function calculateUpdatedDateAfterMonths(monthsToAdd) {
    const currentDate = new Date();
    const updatedDate = addMonthsToDate(currentDate, monthsToAdd);
    const formattedDate = formatDateToYYYYMMDD(updatedDate);

    return formattedDate;
}

// Usage
// const result = calculateUpdatedDate(3); // Add 3 months to the current date
// console.log(`Updated Date: ${result}`);

module.exports = { calculateUpdatedDateAfterMonths }