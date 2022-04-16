import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate(); // For using navigate function

    return (
        <div>
            {id} -- {title.slice(0, 30)}

            {/*<button onClick={() => navigate(id.toString())}>Details</button>*/}
            {/* Bad variant for button navigate. Better use Link */}
            {/* For good button navigate can put it into Link*/}

            <Link to={id.toString()} state={post}>Details</Link>
            {/* STATE can send some data when Link is clicked*/}
        </div>
    );
};

// export default Post;
export {Post};