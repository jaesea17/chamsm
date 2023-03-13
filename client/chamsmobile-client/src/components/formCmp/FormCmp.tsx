import { useReducer, useState } from 'react'
import { useAppDispatch } from '../../feature/hooks/useTypedSelector';
import { savePosts } from '../../feature/actions/actions';
import { EPost } from '../../feature/utils/interfaces';
import './formCmp.css'

export default function FormCmp() {

    const [bookData, setBookData] = useReducer((state: EPost, e) => ({ ...state, [e.target.name]: e.target.value }), {})
    const dispatch = useAppDispatch();
    const [err, setErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation
        if (bookData.description === "") {
            setErr("Invalid input");
            return;
        }
        if (!Number(bookData.description) || bookData.description === "") {
            setErr("Invalid input");
            return;
        }
        if (!Number(bookData.author) || bookData.author === "") {
            setErr("Invalid input");
            return;
        }
        dispatch(savePosts(bookData))
    }

    const style = { "color": "red" }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input
                    type="text"
                    name="title"
                    onChange={setBookData}
                    onClick={() => setErr("")}
                /><br></br>

                <h3>Description</h3>
                <input
                    type="text"
                    name="description"
                    onChange={setBookData}
                    onClick={() => setErr("")}
                /><br></br>

                <h3>Author</h3>
                <input
                    type="text"
                    name="author"
                    onChange={setBookData}
                    onClick={() => setErr("")}
                />

                <input type='submit' />
            </form>

            <h4 style={style}>{err}</h4>
        </>
    )
}
