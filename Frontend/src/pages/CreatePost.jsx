
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/", formData)
        .then(() => {

            navigate('/feed')

        })
        .catch((err) => {
            console.log(err)
            alert("Error creating post")
        })
    }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={ handleSubmit }>

            Upload Image: <input type="file" name="image" accept="image/*" required/>
            <br />
            Enter caption: <input type="text" name="caption" placeholder='caption...' required />
            <br />
            <button type="submit">Submit</button>

        </form>
    </section>
  )
}

export default CreatePost