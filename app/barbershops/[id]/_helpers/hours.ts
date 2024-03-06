import { setHours, setMinutes, format, addMinutes } from "date-fns";

export function generateDayTimelist(date: Date): string[] {
    const startTime = setMinutes(setHours(date, 8), 0); // Set start time to 8:00 AM
    const endtime = setMinutes(setHours(date, 19), 0); // Set end time to 19:00 PM
    const interval = 45; // 45 minutes interval
    const timeList: string[] = [];

    let currentTime = startTime;

    while (currentTime <= endtime) {
        timeList.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);
    }

    return timeList;
}