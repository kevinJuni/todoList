import dayjs from "dayjs";

export const getToday = dayjs(new Date()).format("YYYY-MM-DD");