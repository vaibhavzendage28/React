import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0);

  // const increaseNum = () => {
  //   setNum(num + 1);
  // };

  // const decreaseNum = () => {
  //   setNum(num - 1);
  // };

  // ------------------------------------------------------------------------------------------------------

  // const tempObj = {
  //   name: 'John',
  //   age: 30,
  //   city: 'New York'
  // };

  // const [obj, setObj] = useState(tempObj);

  // const changeName = () => {
  //   // method 1: using spread operator to create a new object and then updating the name property
    // const newObj = {...obj};
    // const newObj = (prev => {...prev, name: 'Jane'});
  //   // newObj.name = 'Jane';
  //   // setObj(newObj);

  //   // method 2: using spread operator to create a new object and then updating the name property in one step
  //   setObj({...obj, name: 'Jane'});
  // }

  // const changeAge = () => {
  //   // method 1: using spread operator to create a new object and then updating the age property  
  //   const newObj = {...obj};
  //   newObj.age = 25;
  //   setObj(newObj);

  //   // method 2: using spread operator to create a new object and then updating the age property in one step
  //   // setObj({...obj, age: 25});
  // }

  // const changeCity = () => {
  //   // method 1: using spread operator to create a new object and then updating the city property
  //   const newObj = {...obj};
  //   newObj.city = 'Los Angeles';
  //   setObj(newObj);

  //   // method 2: using spread operator to create a new object and then updating the city property in one step
  //   // setObj({...obj, city: 'Los Angeles'});
  // }

  // ------------------------------------------------------------------------------------------------------

  // const [num, setNum] = useState(10);

  // const batchUpdateDemo = () => {
    // this will only update the num state once and not three times because React batches the state updates for performance optimization. So, instead of updating the state immediately after each setNum call, React will wait until all the setNum calls are made and then update the state once with the final value. Therefore, the num state will be updated to 11 instead of 13.

    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    // To avoid this issue, we can use the functional form of the state updater function, which takes the previous state as an argument and returns the new state. This way, we can ensure that each update is based on the most recent state value.
  //   setNum(prevNum => prevNum + 1);
  //   setNum(prevNum => prevNum + 1);
  //   setNum(prevNum => prevNum + 1);
  // }
  
  return (
    <div>
      {/* useState for Number Display */}
      {/* <h1>{num}</h1>
      <div className='buttons-div'>
        <button onClick={increaseNum}>+</button>
        <button onClick={decreaseNum}>-</button>
      </div> */}

      {/* -------------------------------------------------------------------------------------------- */}

      {/* useState for objects */}
      {/* <h1>{obj.name}</h1>
      <p>Age: {obj.age}</p>
      <p>City: {obj.city}</p>
      <button onClick={changeName}>Click to Change Name</button>
      <button onClick={changeAge}>Click to Change Age</button>
      <button onClick={changeCity}>Click to Change City</button> */}

      {/* --------------------------------------------------------------------------------- */}

      {/* useState for Arrays is same as that for Objects */}

      {/* ------------------------------------------------------------------------------------ */}

      {/* batch update in React */}

      {/* <h1>{num}</h1>
      <button onClick={batchUpdateDemo}>+</button> */}

      {/* ------------------------------------------------------------------------------------ */}

      {/* Form handling and two-way binding in React */}

      {/* Directly in project */}


    </div>
  )
}

export default App