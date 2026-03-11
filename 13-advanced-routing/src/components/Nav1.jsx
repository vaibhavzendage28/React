import {Link} from 'react-router-dom'

const Nav1 = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 text-2xl bg-gray-800'>
      <h2>My App</h2>
      <div className='flex gap-12'>
        <Link to='/' className='hover:text-blue-600'>Home</Link>
        <Link to='/product' className='hover:text-blue-600'>Products</Link>
        <Link to='/about' className='hover:text-blue-600'>About</Link>
        <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav1