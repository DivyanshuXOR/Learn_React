import React , {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'
import appwriteService from '../appwrite/config'
import { Container, PostForm } from '../components'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      if (slug) {
        appwriteService.getPosts(slug).then((post) => {
            if(post){
                setPosts(post)
            }
        })
      }else{
        navigate('/')
      }
    }, [slug, navigate])
    

  return post ?(
    <div className='py-8'>
        <Container>
            <PostForm post={post}></PostForm>
        </Container>
    </div>
  ):null
}
export default EditPost