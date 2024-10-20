import AdvancedMath from './advancedmath.js';

const advancedmath = new AdvancedMath();

console.log(`Factorial of 0 is ${advancedmath.factorial(0)}`);
console.log(`Factorial of 1 is ${advancedmath.factorial(1)}`);
console.log(`Factorial of 2 is ${advancedmath.factorial(2)}`);
console.log(`Factorial of 3 is ${advancedmath.factorial(3)}`);


// Most software organizations use some combination of manual and automated testing. Manual testing relies primarily on human observation and intuition, 
// while automated testing uses a programmatic approach that is typically integrated into the build and deployment processes.

// As we saw in the last activity, Vitest is an example of the latter, and allows us to create programmatic test cases 
// that can be easily executed against our code.

// Historically, test cases have often been created in parallel with, or after, the completion of code implementation.

// TDD, however, takes a different approach: it instead elevates test-case definition as the first task, 
// to be performed before any code is written.

// This approach lends itself to what is known as the "Red, Green, Refactor" approach:

// "Red" indicates the creation of test cases that are initially expected to fail, since the code has not yet been implemented.

// "Green" indicates the implementation of code intended to satisfy test cases from the previous step.

// "Refactor" indicates an evaluation of the test cases and implementation thus far, often 
// resulting in iterative repetitions of the three steps.

// The three steps repeat until both the test cases and implementation are considered robust and comprehensive.