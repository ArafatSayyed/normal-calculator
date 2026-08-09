import { useState } from "react";

function App()
{
  const [display, setDisplay] = useState("0");

  function handleNumber(number)
  {
    if (display === "0")
    {
      setDisplay(number);
    }
    else
    {
      setDisplay(display + number);
    }
  }

  function handleDecimal()
  {
    if (!display.includes("."))
    {
      setDisplay(display + ".");
    }
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        <button className="clear">AC</button>
        <button className="delete">DEL</button>
        <button className="operator">%</button>
        <button className="operator">÷</button>

        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button className="operator">×</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button className="operator">−</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button className="operator">+</button>

        <button className="zero" onClick={() => handleNumber("0")}>
          0
        </button>

        <button onClick={handleDecimal}>.</button>

        <button className="equals">=</button>
      </div>
    </div>
  );
}

export default App;
