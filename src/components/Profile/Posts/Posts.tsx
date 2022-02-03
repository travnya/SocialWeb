import { useState } from "react";
import AddPostForm from "./AddPostForm";
import { DeleteButton, Item, ItemImage, PostWrapper } from "./Posts.styles";

const Posts = () => {

    let maxID = 0
    
    const createPost = (label : string) => {
        return {
            Author: 'Владислав Самсонов',
            Message: label,
            Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
            id: maxID++
        }
    }

    const [posts, setPost] = useState([
        createPost('Проверка 1'),
        createPost('Проверка 2'),
        createPost('Проверка 3')
    ])

    const addPost = (text: string) => {
        const newPost = createPost(text)
        const newArray = [...posts, newPost]
        setPost(newArray)
    }

    const deletePost = (id: number) => {
        setPost(posts.filter((post) => post.id !== id))
    }

    return (
        <PostWrapper >
            <AddPostForm addPost={addPost}/>
            {posts.map((userPost) => (
                <Item key={userPost.id}>
                    <ItemImage src={userPost.Avatar} alt='Фотография профиля'/>
                    <h5>{userPost.Author}</h5>
                    <p>{userPost.Message}</p>
                    <DeleteButton 
                        type='button'
                        className="btn btn-outline-danger"
                        title="Удалить пост"
                        onClick={() => deletePost(userPost.id)}/>
                </Item>
            ))}
            <button onClick={() => console.log(posts, maxID)}>Проверка</button>
        </PostWrapper>
    )
}

export default Posts