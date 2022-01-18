const spinnerArray = [
  "\r|   ",
  "\r/   ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
];
let delay = 100;
for (const a of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(a);
  }, delay);

  delay += 200;
}

