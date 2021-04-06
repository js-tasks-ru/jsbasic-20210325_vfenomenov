function sumSalary(salaries) {
  let sum = 0;
  let notzero = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number' && isFinite(salaries[key]) == true) {
      notzero = true;
      sum += salaries[key];
    }
  }
    if (notzero == 0) {
      return 0;
    } else {
      return sum;
    }
}
