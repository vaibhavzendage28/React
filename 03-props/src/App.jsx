import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Vaibhav Zendage' description='Software Engineer' info='He is a passionate software engineer with expertise in React and Node.js.' />
      <Card user='John Doe' description='Product Manager' info='He is a product manager with experience in agile development and user research.' />
      <Card user='Jane Smith' description='UX Designer' info='She is a UX designer who focuses on creating intuitive and engaging user experiences.' />
      <Card user='Alice Johnson' description='Data Scientist' info='She is a data scientist who specializes in machine learning and statistical analysis.' />
      <Card user='Bob Williams' description='DevOps Engineer' info='He is a DevOps engineer who ensures smooth deployment and operations of applications.' />
      <Card user='Charlie Brown' description='Frontend Developer' info='He is a frontend developer skilled in building responsive and interactive web applications.' />
      <Card user='Diana Prince' description='UI Designer' info='She is a UI designer who creates visually appealing and user-friendly interfaces.' />
    </div>
  )
}

export default App