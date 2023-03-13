import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../feature/hooks/useTypedSelector';
import { deletePost, editPost, getPosts } from '../../feature/actions/actions';
import { EPost, Post } from '../../feature/utils/interfaces';
import './display.css';

export default function Display() {

    const dispatch = useAppDispatch();
    const { data, error, loading } = useAppSelector((state) => state.post);
    const [inputData, setInputData] = useState({} as EPost);
    const [err, setErr] = useState("");

    const handleEdit = (e: any, book: Post) => {
        setInputData({ [e.target.name]: e.target.value });
        let keysArr = Object.keys(inputData);

        //VALIDATION
        if (keysArr.includes("title") || keysArr.includes("description")
            || keysArr.includes("author")) {
            if (Number(inputData.title) || inputData.title === "") {
                setErr("Invalid input");
                return;
            }
            if (Number(inputData.description) || inputData.description === "") {
                setErr("Invalid input");
                return;
            }
            if (Number(inputData.author) || inputData.author === "") {
                setErr("Invalid input");
                return;
            }
            dispatch(editPost({ id: book.id, ...inputData }))
        }
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const style = { "color": "red" };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th><h4 style={style}>{err}</h4></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((book, i) => {
                        return (
                            <tr key={i}>
                                <td><input
                                    type='text'
                                    name='title'
                                    defaultValue={book.title}
                                    onChange={(e) => { setInputData({ [e.target.name]: e.target.value }) }}
                                    onClick={() => setErr("")}
                                /></td>
                                <td><input
                                    type='text'
                                    name='description'
                                    defaultValue={book.description}
                                    onChange={(e) => { setInputData({ [e.target.name]: e.target.value }) }}
                                    onClick={() => setErr("")}
                                /></td>
                                <td><input
                                    type='text'
                                    name="author"
                                    defaultValue={book.author}
                                    onChange={(e) => { setInputData({ [e.target.name]: e.target.value }) }}
                                    onClick={() => setErr("")}
                                /></td>
                                <td><button onClick={handleEdit}>Edit</button>
                                    <button onClick={
                                        () => { dispatch(deletePost({ id: book.id })) }
                                    }>Delete</button></td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </>
    )
}