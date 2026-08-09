import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  // Number button
  function handleNumber(number) {
    if (waitingForSecondNumber) {
      setDisplay(number);
      setWaitingForSecondNumber(false);
    } else if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  // Decimal button
  function handleDecimal() {
    if (waitingForSecondNumber) {
      setDisplay("0.");
      setWaitingForSecondNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  // AC button
  function handleClear() {
    setDisplay("0");
    setFirstNumber(null);
    setOperation(null);
    setWaitingForSecondNumber(false);
  }

  // DEL button
  function handleDelete() {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  // Addition
  function handleAddition() {
    setFirstNumber(Number(display));
    setOperation("+");
    setWaitingForSecondNumber(true);
  }

  // Subtraction
  function handleSubtraction() {
    setFirstNumber(Number(display));
    setOperation("-");
    setWaitingForSecondNumber(true);
  }

  // Multiplication
  function handleMultiplication() {
    setFirstNumber(Number(display));
    setOperation("*");
    setWaitingForSecondNumber(true);
  }

  // Division
  function handleDivision() {
    setFirstNumber(Number(display));
    setOperation("/");
    setWaitingForSecondNumber(true);
  }

  // Percentage
  function handlePercentage() {
    const number = Number(display);
    const result = number / 100;

    setDisplay(String(result));
  }

  // Equal
  function handleEquals() {
    if (firstNumber !== null && operation !== null) {
      const secondNumber = Number(display);
      let result;

      if (operation === "+") {
        result = firstNumber + secondNumber;
      }

      if (operation === "-") {
        result = firstNumber - secondNumber;
      }

      if (operation === "*") {
        result = firstNumber * secondNumber;
      }

      if (operation === "/") {
        if (secondNumber === 0) {
          setDisplay("Error");
          setFirstNumber(null);
          setOperation(null);
          setWaitingForSecondNumber(false);
          return;
        }

        result = firstNumber / secondNumber;
      }

      setDisplay(String(result));
      setFirstNumber(null);
      setOperation(null);
      setWaitingForSecondNumber(false);
    }
  }

  // Keyboard support
  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key;

      if (key >= "0" && key <= "9") {
        handleNumber(key);
      }

      else if (key === ".") {
        handleDecimal();
      }

      else if (key === "+") {
        handleAddition();
      }

      else if (key === "-") {
        handleSubtraction();
      }

      else if (key === "*") {
        handleMultiplication();
      }

      else if (key === "/") {
        event.preventDefault();
        handleDivision();
      }

      else if (key === "%") {
        handlePercentage();
      }

      else if (key === "Enter" || key === "=") {
        handleEquals();
      }

      else if (key === "Backspace") {
        handleDelete();
      }

      else if (key === "Escape") {
        handleClear();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="calculator">

      {/* Calculator Display */}
      <div className="display">
        {display}
      </div>

      {/* Calculator Buttons */}
      <div className="buttons">

        <button className="clear" onClick={handleClear}>
          AC
        </button>

        <button className="delete" onClick={handleDelete}>
          DEL
        </button>

        <button className="operator" onClick={handlePercentage}>
          %
        </button>

        <button className="operator" onClick={handleDivision}>
          ÷
        </button>

        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>

        <button className="operator" onClick={handleMultiplication}>
          ×
        </button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>

        <button className="operator" onClick={handleSubtraction}>
          −
        </button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>

        <button className="operator" onClick={handleAddition}>
          +
        </button>

        <button
          className="zero"
          onClick={() => handleNumber("0")}
        >
          0
        </button>

        <button onClick={handleDecimal}>
          .
        </button>

        <button className="equals" onClick={handleEquals}>
          =
        </button>

      </div>
    </div>
  );
}

export default App;