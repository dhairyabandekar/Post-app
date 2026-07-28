
import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsfGVufDB8fDB8fHww",
            caption:"Beautiful scenary",
        }
])

useEffect(() => {
  
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        
        setPosts(res.data.posts)

    })

}, [])


  return (
   
    <section className='feed-section'>
       
{
    posts.length > 0 ? (
        posts.map( ( posts ) => (
            <div key={posts._id} className='post-card' >
                <img src={posts.image} alt={posts.caption} />
                <p>{posts.caption}</p>
            </div>
        ) )
    ) : (
        <h1>No posts available</h1>
    )
}
    </section>

  )
}

export default Feed