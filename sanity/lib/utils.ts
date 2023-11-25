import { parseISO, formatDistanceToNow } from "date-fns"

export const humanReadableDateFormat = (timestamp: string): string => {

    // Parse the timestamp to a Date object
    const timestampDate = parseISO(timestamp);

    // Calculate the difference and format the result
    return formatDistanceToNow(timestampDate, { addSuffix: true });
}
