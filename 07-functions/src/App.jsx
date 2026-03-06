import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('Button was clicked!');
  }

  const inputChanged = (event) => {
    console.log('Input value changed:', event.target.value);
  }

  const pointerEntered = (coordinates) => {
    console.log('Pointer entered the div!', coordinates);
  }

  return (
    <div>
      <h1>Hello, React! Let's Learn Functions</h1>

      <hr />

      {/* ex 1 */}

      <button onClick={btnClicked}>Click me!</button>

      <hr />

      {/* ex 2 */}

      <input type="text" onChange={inputChanged} />

      <hr />

      {/* ex 3 */}

      <div className='practice' onPointerEnter={(event) => {
        const coordinates = {
          x: event.clientX,
          y: event.clientY
        }
        pointerEntered(coordinates);
      }}>

      </div>

      {/* 
            Some more important events to know:
            - onMouseEnter
            - onMouseLeave
            - onMouseMove
            - onKeyDown
            - onKeyUp
            - onSubmit (for forms)
            - onFocus (when an element receives focus, e.g., input field)
            - onBlur (when an element loses focus)
            ... and many more!
      */}

      <hr />
    </div>
  )
}

export default App