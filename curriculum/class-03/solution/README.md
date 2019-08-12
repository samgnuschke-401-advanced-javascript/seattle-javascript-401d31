# Solution: Async

## Lab Requirements

### Lab Assignment 1
* Use the fs module to read a file, change its contents, and save it out
  * This will be a "start from scratch" assignment, students must complete this before tackling the 2nd assignment.* 
      
#### Grading Standards & Notes
  * Features
    * Must read from CLI
    * Must write back to the file something different
  * Code Quality
  * Testing
    * Must use the mocked fs to test this
  * Deployment
    * Travis Only
  * Documentation
    * README Standards 
    * JSDoc Required
    
#### Lab Assistance Notes
* They will need help understanding process.argv and reading in options from the command line. Drive them to the docs, and help them verbalize what they'll want to be searching for.
* This will be their first time dealing with a mock.  

---

### Lab Assignment 2
* Students will get starter code here, which is a monolithic file that reads in 3 files in series, using a callbacks, with a mocked test.
  * This code doesn't work 
  * callbacks aren't nested
  * the callback function isn't called right
  * as-is, it can't be tested.
        
### Task 1:
  * They must first nest the callbacks and get the right data back to the calling function, index.js will work and the tests will also pass
  * They must modularize this code
  * They must refactor the input to accept a list of file names
  * They must read/output the file contents in order
  * They must refactor the test to make that assertion
      
### Task 2: 
  * They must refactor the code from callbacks to chained promises
      
### Task 3: 
  * They must refactor the code from callbacks to chained async/await
        
### Task 4 (Stretch Goal)
  * Use Promise.all()
  * Create an array of fs.readFile promises
  * Bring in the results in order

### Task 5 (Stretch Goal)
  * Use a recursive function to do a callback for each file
  * Load the list of files into an array
  * For the recursion, keep shifting the array until it's empty
  * Load up the response array and return on the last iteration
      
#### Grading Standards & Notes
  * Features
    * Must read from CLI
    * Must read and print file contents in order
  * Code Quality
  * Testing
    * Must use the mock
    * Assert that we're getting the order right
    * Assertions around error handling and bad input/output
  * Deployment
    * Travis Only
  * Documentation
    * README Standards 
    * JSDoc Required
    
#### Lab Assistance Notes
* Promises are tough to understand at first. 
* Have them verbalize what they want to do in english
  * "Do this thing, **then** give me some data and I'll deal with it"

