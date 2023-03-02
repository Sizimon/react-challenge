import React from 'react'
import css from './css/Content.module.css'

function PostItemAPI(props) {
  return (
    props.savedPosts.map(post => {
        const {id, type, user, webformatURL, tags} = post
        return <div key={id} className={css.SearchItem}>
            <h1>{type}</h1>
            <p>{user}</p>
            <img src={webformatURL}></img>
            <p>{tags}</p>
        </div>
    })
  )
}

export default PostItemAPI