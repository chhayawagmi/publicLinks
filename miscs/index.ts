// Filename: index.ts

// Check if there is at least one command-line argument
if (process.argv.length < 3) {
  console.log("Please provide a command-line argument.");
} else {
  // Get the user argument (the first argument after the script name)
  const userArgument: string = process.argv[2];

  // Print the user argument
  console.log(`You provided the following argument: ${userArgument}`);
}
