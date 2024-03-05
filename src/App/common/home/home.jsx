import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
	<>
	<div>Home</div>
	<Button><Link to={'./create-blog'}>Create Blog</Link></Button>
	</>
  )
}

export default Home