import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$58/hr",
      location: "Mountain View, CA, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$72/hr",
      location: "Cupertino, CA, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "1 day ago",
      post: "Cloud Support Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$52/hr",
      location: "Seattle, WA, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "7 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$65/hr",
      location: "Redmond, WA, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Contract",
      tag2: "Junior",
      pay: "$48/hr",
      location: "Menlo Park, CA, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "4 days ago",
      post: "Automation Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$55/hr",
      location: "Austin, TX, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$80/hr",
      location: "Santa Clara, CA, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      companyName: "Intel",
      datePosted: "5 days ago",
      post: "Chip Design Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$60/hr",
      location: "Portland, OR, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "2 days ago",
      post: "Database Administrator",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$50/hr",
      location: "Austin, TX, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/samsung.com",
      companyName: "Samsung",
      datePosted: "6 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Contract",
      tag2: "Junior",
      pay: "$42/hr",
      location: "Seoul, South Korea"
    }
  ];

  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <Card key={index} job={job} />
      ))}
    </div>
  )
}

export default App;
