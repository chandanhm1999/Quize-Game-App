# React JS!!
https://quize-game-ed322tw6q-chandanhm1999.vercel.app/
##
![QUIZE](https://github.com/chandanhm1999/Quize-Game-App/assets/109410990/658f69c9-cb28-4f82-84f0-62db078afc76)

> Project Details:!
* User is given 5 random values and he/she has to sort it.
* After sorting the user would be able to check if the answer is correct or wrong.
* 5 random options are draggable and these need to be dropped in input buckets.
* Can drag and drop from options to input and vice-versa.
* After filling all the inputs, the check button of the form should be enabled.
* Post result, users can reset the game and try again with different random numbers.

## Clone!
```
https://github.com/chandanhm1999/Quize-Game-App
```

## Project Link:
```
https://quize-game-ed322tw6q-chandanhm1999.vercel.app/
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run
```

## How the components and the overall quiz game work behind the scenes.

1. State Management:
   - The `QuizGame` component uses the React `useState` hook to manage state. Here's a breakdown of the state variables used:
     - `numbers`: Stores the array of randomly generated numbers.
     - `sortedNumbers`: Stores the sorted version of the `numbers` array.
     - `inputs`: Keeps track of the user's input for each number.
     - `isChecking`: Indicates whether the user has clicked the "Check" button to verify their answer.
     - `isCorrect`: Stores the result of the user's answer, whether it is correct or not.

2. Initial Setup:
   - The `useEffect` hook is utilized to generate random numbers and initialize the state variables when the component mounts. The `generateRandomNumbers` function is called, which generates five random numbers between 1 and 100 using a `for` loop. These numbers are stored in the `numbers` state variable. The `sortedNumbers` state variable is then set by sorting a copy of the `numbers` array.

3. Drag and Drop Functionality:
   - The `handleDragStart` function is triggered when a number option is dragged. It sets the dragged number as plain text data to be transferred.
   - The `handleDragOver` function is triggered when a number option is dragged over an input field. It prevents the default behavior to allow dropping.
   - The `handleDrop` function is called when a number option is dropped onto an input field. It prevents the default behavior, retrieves the transferred number from the data, and updates the `inputs` state by replacing the corresponding input field value with the dropped number.

4. Input Field Interaction:
   - The `handleInputChange` function is invoked when the user manually types a number into an input field. It updates the `inputs` state by replacing the corresponding input field value with the user's input.

5. Checking the Answer:
   - When the user clicks the "Check" button, the `checkAnswer` function is called.
   - It sets the `isChecking` state to `true`, indicating that the user has initiated the answer check.
   - It compares the stringified versions of `sortedNumbers` and `inputs` using `toString()`. If the two strings match, the answer is considered correct, and `isCorrect` is set to `true`.

6. Resetting the Game:
   - Clicking the "Reset" button triggers the `resetGame` function.
   - It sets the `isChecking` state back to `false`, allowing the user to attempt the quiz again.
   - The `generateRandomNumbers` function is called again to generate new random numbers and reset the state variables.

7. Displaying Results:
   - If the user has clicked the "Check" button (`isChecking` is `true`), the result message is displayed.
   - The result message component is conditionally rendered based on the value of `isCorrect`.
   - The CSS classes `"correct"` or `"wrong"` are added to the result message div based on `isCorrect` to apply the appropriate styling.

That's a breakdown of how the components and the quiz game work together behind the scenes. The `useState` hook manages the state, while various event handlers and functions handle the drag and drop functionality, user input, checking the answer, and resetting the game.
