function dayOfProgrammer(year) {
    let dayOfProgrammer = 256; // The 256th day of the year

    if (year === 1918) {
        // Transition year: February had only 14 days
        return `26.09.${year}`;
    }

    let isLeapYear;
    if (year < 1918) {
        // Julian calendar leap year rule
        isLeapYear = (year % 4 === 0);
    } else {
        // Gregorian calendar leap year rule
        isLeapYear = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
    }

    if (isLeapYear) {
        return `12.09.${year}`; // 12th September for leap years
    } else {
        return `13.09.${year}`; // 13th September for non-leap years
    }
}
