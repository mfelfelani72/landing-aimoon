export default function formatNumberHelper(number, char = ",") {
    // Convert number to string
    const numStr = number.toString();

    // Use regex to add commas every 3 digits from the right
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, char);
}
