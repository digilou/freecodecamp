function confirmEnding(str, target) {
 return target === str.substring(str.length - target.length);
}

confirmEnding("Bastian", "n");
