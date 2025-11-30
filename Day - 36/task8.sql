function formatText(str) {
    // Trim spaces
    str = str.trim();

    // If empty, return empty string
    if (str.length === 0) return "";

    // Capitalize first letter + make rest lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
