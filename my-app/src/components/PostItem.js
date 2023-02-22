import React from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'


function PostItem() {
  return (
    savedPosts.map(post => {
        return <div key={post.title} className={css.SearchItem}>
            <h1>{post.title}</h1>
            <p>{post.name}</p>
            <img src={post.image}></img>
            <p>{post.description}</p>
        </div>
    })
  )
}

export default PostItem