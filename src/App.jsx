function App()
{
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        {/* Upper controls */}
        <button className="clear">AC</button>
        <button className="delete">DEL</button>
        <button className="operator">%</button>
        <button className="operator">÷</button>

        {/* Numbers */}
        <button>7</button>
        <button>8</button>
        <button>9</button>

        <button className="operator">×</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>

        <button className="operator">−</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        
        <button className="operator">+</button>

        {/* Bottom row */}
        <button className="zero">0</button>
        <button>•</button>
        <button className="equals">=</button>
      </div>
    </div>
  );
}
export default App;
