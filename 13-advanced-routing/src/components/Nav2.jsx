import {useNavigate} from 'react-router-dom'

const Nav2 = () => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-start items-center py-4 px-8 text-2xl gap-4'>
        <button onClick={()=>navigate(-1)} className='bg-green-800 px-2 py-1 rounded text-xl cursor-pointer active:scale-95'>Back</button>
        <button onClick={()=>navigate(+1)} className='bg-green-800 px-2 py-1 rounded text-xl cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Nav2