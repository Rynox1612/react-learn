export function getTicket(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

export function sum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum;
}
