function checkInitials(str) {
  if (!str) return null;
  const array = Array.from(str);
  let count = 0;
  array.forEach((el) => {
    if(el === el.toUpperCase()){
      count += 1;
    }
  })
  return count;
}

module.exports = checkInitials;