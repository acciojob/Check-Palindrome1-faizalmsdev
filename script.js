function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Create reversed version of the string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Compare the original and reversed strings
  return cleanedStr === reversedStr;
}

module.exports = palindrome;
