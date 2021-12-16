import React from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../types'

interface IProps {
	posts: IPost[]
}

const Blogs: React.FC<IProps> = ({ posts }) => {
	return (
		<div>
			{posts.map((post: IPost) => {
				const { id, title, text, published_at } = post
				return (
					<div
						key={id}
						className='blog'
						style={{
							margin: '1rem auto',
							padding: '.25rem 0',
							maxWidth: '30rem',
							textAlign: 'left',
							borderBottom: '.5px solid lightgray',
						}}
					>
						<h2>{title}</h2>
						<p>{text}</p>
						<time>{new Date(published_at).toLocaleDateString()}</time>
						<Link className='Link' to={`/post/${id}`}>
							More
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Blogs
