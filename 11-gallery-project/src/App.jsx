import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(res.data);
  }

  useEffect(()=>{
    getData();
  }, [index])

  let printUserData = <h1 className='text-gray-300 text-center text-2xl absolute left-[48%] top-[45%] translate-x--1/2 translate-y--1/2'>loading...</h1>;

  if(userData.length > 0) {
    printUserData = userData.map((elem, idx)=>{
      return (
        <div key={idx}>
          <div className='h-55 w-69 rounded-xl overflow-hidden'>
            <a href={elem.url} target="_blank" rel="noopener noreferrer">
              <img className='h-full w-full object-cover' src={elem.download_url} alt={elem.author} />
            </a>
          </div>
          <h1 className='text-lg font-bold mt-2'>{elem.author}</h1>
        </div>
      )
    })
  }

  return (
    <div className='h-screen w-100% bg-black text-white p-6 overflow-auto'>
      
      <div className='text-gray-300 flex flex-wrap gap-5 mb-6'>
        {printUserData}
      </div>

      <div style={{display: userData.length > 0 ? 'flex' : 'none'}} className='flex justify-center pt-4 pb-2 gap-6 '>
        <button style={{opacity: index===1 ? 0.5 : 1}} className='bg-green-600 text-xl font-semibold cursor-pointer mb-4 px-4 py-2 rounded active:scale-95' onClick={() => {
          if(index === 1) return;
          setIndex(Math.max(1, index - 1));
          setUserData([]);
        }}>
          Prev
        </button>
        <h1 className='text-xl font-semibold py-2 px-4'>Page {index}</h1>
        <button className='bg-green-600 text-xl font-semibold cursor-pointer mb-4 px-4 py-2 rounded active:scale-95' onClick={() => {
          setIndex(index + 1);
          setUserData([]);
        }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App