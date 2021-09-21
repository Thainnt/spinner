const spinnerChar = "|/-\\|";

for (let i = 0; i <= spinnerChar.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChar.charAt(i)}  `);
    if (i === spinnerChar.length) {
      process.stdout.write('\n');  
    }
  }, 100 + 200 * i);
}