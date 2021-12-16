import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IPost } from '../types'

const Blog: React.FC = (): React.ReactElement => {
	const { postId } = useParams()
	const [post, setPost] = useState<IPost>()
	const getPost = async () => {
		const url = `https://serverless-api.vivekkumar.workers.dev/api/posts/${postId}`
		const res = await fetch(url)
		const data = await res.json()
		console.log(data)
		setPost(data)
	}

	useEffect(() => {
		getPost()
		// eslint-disable-next-line
	}, [])

	const date = post?.published_at

	return (
		<div
			style={{
				margin: '1rem auto',
				maxWidth: '30rem',
				textAlign: 'left',
			}}
		>
			<div>
				<h2 style={{ margin: '.5rem 0' }}>{post?.title}</h2>
				<span>
					<span>Published: </span>
					{new Date(date!).toLocaleDateString()}
				</span>
				<p style={{ margin: '.5rem 0' }}>{post?.text}</p>
			</div>
			<Link className='Link' to='/'>
				Go back
			</Link>
		</div>
	)
}

export default Blog
