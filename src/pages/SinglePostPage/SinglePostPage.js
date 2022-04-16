import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post_service";
import {PostDetails} from "../../components/PostDetails/PostDetails";

const SinglePostPage = () => {

    // Variant 1 : Faster but not reliable
    // const {state} = useLocation(); // Catching STATE from LINK
    // const [post, setPost] = useState(null);
    // useEffect(() => {
    //     setPost(state);
    // }, [state])

    // Variant 2 : Reliable but slowly
    // const {id} = useParams();   // Taking query parameters from url
    // const [post, setPost] = useState(null);
    // useEffect(() => {
    //     postService.getById(id).then(value => setPost(value));
    // }, [id])

    // Variant 3 : Combine first and second
    const {id} = useParams();   // For taking query parameters from url
    const {state} = useLocation(); // To catch STATE from LINK
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (!state) {
            postService.getById(id).then(value => setPost(value));
        } else {
            setPost(state)
        }
    }, [id, state])

    return (
        <div style={{width: '50%'}}>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};