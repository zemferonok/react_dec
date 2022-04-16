import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post_service";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postService.getAll().then(value => setPosts(value));
    },[])

    return (
        <div>
            Posts
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

// export default Posts;
export {Posts};