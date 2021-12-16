import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { IPost } from './types'
import Blogs from './components/Blogs'
import Blog from './components/Blog'

const App: React.FC = (): React.ReactElement => {
	const [posts, setPosts] = useState<IPost[] | []>([])
	const fetchPosts = async () => {
		const url = 'https://serverless-api.vivekkumar.workers.dev/api/posts'
		const res = await fetch(url)
		const data = await res.json()
		console.log(data)
		setPosts(posts => data)
	}
	useEffect(() => {
		fetchPosts()
	}, [])
	return (
		<div className='App'>
			<h1 style={{ margin: '.25rem' }}>My Blogs</h1>
			<Routes>
				<Route path='/' element={<Blogs posts={posts} />} />
				<Route path='/post/:postId' element={<Blog />} />
			</Routes>
		</div>
	)
}

export default App
