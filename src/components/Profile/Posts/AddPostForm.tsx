import { useState } from "react";
import { PostInput } from "./Posts.styles";

const AddPostForm = (props: any) => {
    const [label, setLabel] = useState('')

    const onLabelChange = (event: any) => {
        setLabel(event.target.value)
    }

    const onSubmit = (event: any) => {
        event.preventDefault()
        props.addPost(label)
        setLabel('')
    }

    return(
        <form 
            className="d-flex"
            onSubmit={onSubmit}>
            <PostInput 
                className="form-control me-sm-2"
                onChange={onLabelChange}
                type='text'
                placeholder="Как ваши дела?"
                value={label}/>
            <button 
                className="btn btn-secondary my-2 my-sm-0"
                type="submit"
                onClick={onSubmit}>
                Добавить
            </button>
        </form>
    )
}

export default AddPostForm