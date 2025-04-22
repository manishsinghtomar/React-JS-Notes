import React from 'react'
import { Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div>
      Dashboard page
      <Outlet/>
    </div>
  )
}

export default Dashboard
