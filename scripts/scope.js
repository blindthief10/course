function calculateCigars(hoursOfSleeping, cigarEveryMinutes) {

    const hoursPerDay = 24;
    const minutesPerHour = 60;

    let hoursAwake = hoursPerDay - hoursOfSleeping;

    let totalMinutesAwakePerDay = minutesPerHour * hoursAwake;

    let totalCigarsPerDay = totalMinutesAwakePerDay / cigarEveryMinutes;

    return totalCigarsPerDay;

}

let yasminesCigarPerDay = calculateCigars(8, 5);


console.log(`Yasmine smokes ${yasminesCigarPerDay} cigars every day.`);
