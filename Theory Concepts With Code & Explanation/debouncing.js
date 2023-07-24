// *** Debouncing in Javascript *** 

// Imagine this is a function that will be called frequently, but we want to debounce it.
function fetchDataFromServer(query) {
    // Assume this function fetches data from the server based on the query.
    // For demonstration purposes, we will just log the query here.
    console.log("Fetching data for query:", query);
  }
  
  // Debouncing Function
  function debounce(func, delay) {
    // We declare a variable 'timer' to store the timer ID returned by setTimeout.
    let timer;
  
    // Return a new function that is the debounced version of the original function.
    return function() {
      // This new function is what we will call when we want to execute 'func' in a debounced manner.
  
      // Inside the new function, we clear any existing timer.
      clearTimeout(timer);
  
      // We set a new timer using setTimeout, which will execute 'func' after the specified 'delay'.
      // The 'this' value and 'arguments' from the current context are passed to 'func'.
      // This means the debounced function behaves like the original function when called.
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  
  // Now, let's create a debounced version of the fetchDataFromServer function with a delay of 500 milliseconds.
  const debouncedFetchData = debounce(fetchDataFromServer, 500);
  
  // Example usage: Call debouncedFetchData multiple times within a short period.
  debouncedFetchData("apple");
  debouncedFetchData("orange");
  debouncedFetchData("banana");
  
  // Output: Nothing will be logged immediately.
  
  // After 500 milliseconds of inactivity, only one fetchDataFromServer will be executed with the last query.
  // Output: "Fetching data for query: banana"
  


//   *****************************

// Theory About Debouncing in Javascript


// Debouncing in JavaScript is a technique used to control the rate at which a function is executed. It ensures that a function is called only after a certain amount of time has passed since the last time it was invoked. This is particularly useful when dealing with events that can trigger rapidly, such as scroll, resize, or input events, to prevent excessive function calls and improve performance.

// ** How Debouncing Works:

// Debouncing involves setting a timer whenever the function is called. If the function is called again before the timer expires, the previous timer is cleared, and a new timer is set. This process continues until there is a pause in function calls, allowing the function to be executed after a specified delay.

// ** Debouncing Use Cases:

// Input Fields: In web applications, debouncing is commonly used for handling input fields like search boxes or auto-complete suggestions. Instead of making a request with each keystroke, the search request is delayed until the user pauses typing.

// Scroll and Resize Events: When dealing with scroll or resize events, debouncing helps reduce the number of times an event handler is executed, preventing performance bottlenecks.

// Drag Events: Debouncing is helpful for handling drag events, where updates might not be required at every pixel movement.



// ************************************** 

// general estimation of the potential performance improvement with debouncing in a scenario with 10 million users searching for "men t-shirt."

// ** Without Debouncing:

// Each user's input triggers an immediate API call for the search query.

// With 10 million users making individual API calls, the server could be flooded with simultaneous requests, causing high server load and possible performance degradation.

// The server has to process all these requests and respond to each one separately, leading to high response times and potential bottlenecks.

// ** With Debouncing:

// As users type in the search input, the debouncing logic delays the API call until the user pauses typing.
// The API call is made only after the user stops typing or pauses for a certain duration (e.g., 300ms, as shown in the previous example).

// With 10 million users making search requests, the number of API calls can be significantly reduced since only the final query after the pause will trigger the actual API call.
// This reduces the server load and the number of requests it needs to process, improving server performance and response times.

// ** Estimated Performance Improvement:

// The actual performance improvement gained by using debouncing will vary depending on factors like network latency, server capabilities, caching, and other network conditions. However, in a scenario with 10 million users searching for "men t-shirt," using debouncing could potentially reduce the number of API calls made to the server by a significant percentage.

// For instance, if debouncing reduces the number of API calls by 70%, the server will have to process only 3 million requests instead of 10 million. This can lead to substantial improvements in response times and overall server performance, reducing the risk of server overload during peak usage


// *******************************