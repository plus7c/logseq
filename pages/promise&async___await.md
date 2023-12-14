- https://www.freecodecamp.org/news/guide-to-javascript-promises/
- promise.any()和promise.race的区别
- >This method is useful for asynchronous operations where the fastest successful promise is all you need. Promise.any() and Promise.race() are similar, except that Promise.any() will return the fastest promise to complete and be resolved, while Promise.race() will return the fastest promise to complete and does not care if it is resolved or not.
- promise of fulfilled state is still a promise
- >Promise.allSettled() accepts an array of promises as an argument and returns a single promise as the output.
- promise.all() only return the successful promises,but promise.allSettled() ruturn promise no matter success or not
- >The difference is Promise.all() can only be successful if all the promises in the input are resolved, while Promise.allSettled() does not care about the status of the input promises.
- Async/await is the alternative of promise.
- >What is the Async/Await Syntax? Async/await syntax became a feature of JavaScript with the release of ES8(ES2017). It is built on top of promises, and you can see it as an alternative syntax to promises.
- async function will always return a promise.
- >The function this keyword helps create will always return a promise.
- await keyword transform the promise into a specfic value .
- >Using the await keyword before a promise will produce the resolved value of that promise
- .then() return a new promise,but await ruturn a specific. this is the difference
- promise style or async/await style can be mixed,it depends on our choice and preference.they are all invented to figure out the messy asynchronous code style.
- >You can also use both syntaxes together, chaining promises inside an async function.
- try is a block that checks for errors.
- >The first error inside the try block stops the other instructions in that block from executing, try then passes the error value to the catch block. The catch block is similar to .catch() in promises. Just like the promise method, it is a function of an error.
- ```
  
  What will be the output of this code?
  
  console.log(1);
  
  setTimeout(() => console.log(2));
  
  Promise.resolve().then(() => console.log(3));
  
  Promise.resolve().then(() => setTimeout(() => console.log(4)));
  
  Promise.resolve().then(() => console.log(5));
  
  setTimeout(() => console.log(6));
  
  console.log(7);
  ```