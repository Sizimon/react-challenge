import React, {useState, useEffect} from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])
    useEffect(()=>{
        fetchImages();
    }, []);

    const fetchImages = async () => {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
      const fetchedPosts = response.data.hits

      setIsLoaded(true)
      setPosts(fetchedPosts)
      setSavedPosts(fetchedPosts)
    }

    const handleFormInput = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
          return (
            post.user.toLowerCase().includes(name)
          )
        })
        setPosts(filteredPosts)
      }

    return (
        <div>
        <div className={css.TitleBar}>
            <h1 key='PostHeading'>My Posts</h1>
            <form>
              <label htmlFor='searchInput'>Search:</label>
              <input 
              id='searchInput' 
              onChange={(event) => {handleFormInput(event)}} 
              placeholder='By Author' 
              type='search'></input>
              <h4>posts found: {posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {
              isLoaded ? 
              <PostItemAPI savedPosts={posts} />
              : <Loader />
            }
        </div>
      </div>
    )
}

export default ContentHooks