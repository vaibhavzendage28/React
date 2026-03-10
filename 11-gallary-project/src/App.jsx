import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(res.data);
  }

  useEffect(()=>{
    getData();
  }, [index])

  let printUserData = <h1 className='text-gray-300 text-center text-2xl absolute left-1/2 top-1/2 translate-x--1/2 translate-y--1/2'>loading...</h1>;

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
      <div className='flex justify-center pt-4 pb-2 gap-6 btns'>
        <button className='bg-green-400 cursor-pointer mb-4 px-4 py-2 rounded active:scale-95' onClick={() => {
          setIndex(Math.max(0, index - 1));
          setUserData([]);
        }}>
          Prev
        </button>
        <button className='bg-green-400 cursor-pointer mb-4 px-4 py-2 rounded active:scale-95' onClick={() => {
          setIndex(index + 1);
          setUserData([]);
        }}>
          Next
        </button>
      </div>
      <div className='text-gray-300 flex flex-wrap gap-5 mb-6'>
        {printUserData}
      </div>
    </div>
  )
}

export default App