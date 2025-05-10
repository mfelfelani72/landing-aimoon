export function stringHelper(string, count, start = 0, type = "word") {
  let result = "";

  if (type == "word")
    result = string.split(/\s+/).slice(start, count).join(" ");
  else if (type == "letter") result = string.substring(start, count);

  if (result.length > 1) result = result + "...";

  return result;
}



export function safeSentenceHelper(sentence) {
  if (!sentence) return '';
  
  return sentence.replace(/[^a-zA-Z0-9]/g, '');
}
