import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex justify-center py-4 gap-4'>
      <Link className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer active:scale-95' to='/product/courses'>
        Courses
      </Link>
      <Link className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer active:scale-95' to='/product/stationary'>
        Stationaries
      </Link>
      <Outlet />
    </div>
  )
}

export default Product