import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      company: "Amazon",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      tags: {
        tag1: "Full Time",
        tag2: "Senior Level"
      },
      salary: "$120/hr",
      location: "Mumbai, India",
      image: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
    },
    {
      company: "Google",
      posted: "2 days ago",
      role: "Frontend Engineer",
      tags: {
        tag1: "Full Time",
        tag2: "Mid Level"
      },
      salary: "$150/hr",
      location: "Bangalore, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFUTi1RsVDFSupmzDUJ5I3ZHBtwz043rbHQ&s"
    },
    {
      company: "Microsoft",
      posted: "1 week ago",
      role: "Cloud Solutions Architect",
      tags: {
        tag1: "Full Time",
        tag2: "Senior Level"
      },
      salary: "$180/hr",
      location: "Hyderabad, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s"
    },
    {
      company: "Meta",
      posted: "3 days ago",
      role: "React Developer",
      tags: {
        tag1: "Contract",
        tag2: "Mid Level"
      },
      salary: "$140/hr",
      location: "Remote",
      image: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg"
    },
    {
      company: "Apple",
      posted: "6 days ago",
      role: "iOS Developer",
      tags: {
        tag1: "Full Time",
        tag2: "Senior Level"
      },
      salary: "$170/hr",
      location: "Delhi, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s"
    },
    {
      company: "Netflix",
      posted: "4 days ago",
      role: "Backend Engineer",
      tags: {
        tag1: "Full Time",
        tag2: "Senior Level"
      },
      salary: "$190/hr",
      location: "Remote",
      image: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
    },
    {
      company: "Tesla",
      posted: "2 weeks ago",
      role: "Embedded Systems Engineer",
      tags: {
        tag1: "Full Time",
        tag2: "Mid Level"
      },
      salary: "$160/hr",
      location: "Pune, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj7FJwC0vEK-pcoaKv3LNrPWHNXgRM-AhDw&s"
    },
    {
      company: "Adobe",
      posted: "1 day ago",
      role: "Product Designer",
      tags: {
        tag1: "Part Time",
        tag2: "Senior Level"
      },
      salary: "$130/hr",
      location: "Noida, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s"
    },
    {
      company: "LinkedIn",
      posted: "3 days ago",
      role: "Data Scientist",
      tags: {
        tag1: "Full Time",
        tag2: "Mid Level"
      },
      salary: "$155/hr",
      location: "Bangalore, India",
      image: "https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
    },
    {
      company: "Uber",
      posted: "5 days ago",
      role: "DevOps Engineer",
      tags: {
        tag1: "Full Time",
        tag2: "Senior Level"
      },
      salary: "$165/hr",
      location: "Hyderabad, India",
      image: "https://static.vecteezy.com/system/resources/thumbnails/067/941/693/small_2x/uber-logo-rounded-hd-free-png.png"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((job, idx) => {
        return <div key={idx}>
          <Card {...job} />
        </div>
      })}
    </div>
  )
}

export default App