import { Days } from "../enums/days";
import { Months } from "../enums/months";

type Date = {
    year: number;
    month: Months;
    day: number;
    dayName: Days;
    time: Time;
}
