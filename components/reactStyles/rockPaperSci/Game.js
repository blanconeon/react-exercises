import { useState } from "react";
import styles from './Game.module.css';
const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];
const choiceStyles = {
  display: 'flex',
  marginBottom: 40,
  alignItems: 'center' 
  };

const emojiStyles = {
  fontSize: 64,
  marginRight: 20
};

const nameStyles = {
margin: 0,
fontSize: 24,
color: '#ffff'
};
const resultStyle ={
  marginTop: 40,
  fontSize: 48,
  color: '#ffff'
};

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1 style={{fontSize:'48px', marginTop: 0}}>Rock Paper Scissors</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
            className={styles.button}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p  style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div  style={choiceStyles}>
            <span  style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <button onClick={resetGame} className={styles.button}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;


/* It can feel confusing at first! Here’s how it works step by step:

- `CHOICES` is an array of objects, each representing an option (rock, paper, scissors).
- `.map((item) => ...)` loops through each object in the array, one at a time.
- For each loop, `item` is set to the current object (for example, `{ name: "rock", emoji: "✊" }`).
- Inside the map, you use `item.emoji` to show the emoji for that button.
- The `onClick={() => handlePlayerChoice(item)}` means:  
  When this button is clicked, call `handlePlayerChoice` and pass it the current `item` object.

So, each button is tied to its own object. When you click a button, it knows which object it represents because of how the arrow function is set up. The `item` variable is unique for each button in the loop.Think of `CHOICES.map((item) => ...)` as a loop. For each option (rock, paper, scissors), `item` is set to that option’s object.

- When rendering, `item.emoji` shows the emoji for that button.
- The `onClick={() => handlePlayerChoice(item)}` creates a function for each button that, when clicked, calls `handlePlayerChoice` with that specific `item`.

So, if you click the "rock" button, `item` is the rock object, and that’s what gets passed to `handlePlayerChoice`. Each button’s `onClick` is tied to its own `item` from the loop.*/

/* When you use `className={styles.someClass}` and `someClass` does not exist in the imported CSS module, React will throw an error because it cannot find that property on the `styles` object. This stops the component from rendering.

-With inline styles (like your `choiceStyles` object), React does not check if the style is used or not—it just ignores unused objects. But with CSS modules, trying to use a class that does not exist in the module causes a runtime error, which can break rendering.If you use `className={styles.someClass}` and `someClass` is not defined in your CSS module, React will try to access a property that does not exist on the `styles` object. This results in `undefined`, and in strict environments or with certain setups, this can cause an error and stop rendering.

With inline styles, unused style objects are ignored until applied, so they don’t cause errors. CSS modules are stricter because they expect the class to exist in the imported file.

Yes, you can use this pattern in a form, especially for buttons or custom input elements. For example, if you have a set of custom radio buttons or options, you can use:

```jsx
onClick={() => handleSelect(option)}
```

This passes the specific value to your handler, just like in your game code. For standard text inputs, you usually use `onChange={handleChange}` and get the value from `e.target.value`.

*/
