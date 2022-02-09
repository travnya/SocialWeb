import { useEffect, useState } from "react";
import AddPostForm from "./AddPostForm";
import { DeleteButton, Item, ItemImage, PostWrapper } from "./Posts.styles";

const Posts = () => {

    const [id, setId] = useState<number>(0)

    const createPost = (label: string, id: number) => {
        return {
            Author: 'Владислав Самсонов',
            Message: label,
            Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
            id: id
        }
    }

    const [posts, setPost] = useState([
        createPost('Ололо, я дурачок', 0)
    ])

    const addPost = (text: string) => {
        if (text !== ''){
            const newPost = createPost(text, id + 1)
            const newArray = [...posts, newPost]
            setId(id + 1)
            setPost(newArray)
        }
    }

    const deletePost = (id: number) => {
        setPost(posts.filter((post) => post.id !== id))
    }

    return (
        <PostWrapper >
            <AddPostForm addPost={addPost} />
            {posts.map((userPost) => (
                <Item key={userPost.id}>
                    <ItemImage src={userPost.Avatar} alt='Фотография профиля' />
                    <h5>{userPost.Author}</h5>
                    <p>{userPost.Message}</p>
                    <DeleteButton
                        type='button'
                        className="btn btn-outline-danger"
                        title="Удалить пост"
                        onClick={() => deletePost(userPost.id)} />
                </Item>
            ))}
        </PostWrapper>
    )
}

export default Posts