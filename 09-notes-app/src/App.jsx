import Form from './components/Form'
import Header from './components/Header'
import Notes from './components/Notes'

const App = () => {
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col lg:flex-row items-start lg:p-10 gap-10'>
      <Form />
      <Notes />
    </div>
  )
}

export default App