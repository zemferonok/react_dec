import css from './PostDetails.module.css'

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={css.header}>
            <h2>PostDetails</h2>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};