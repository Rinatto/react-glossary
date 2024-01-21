import React from "react";
import PostItem from "./postItem";

const PostList = ({posts}) => {
    return (
        <div className="postList">
            {posts.map(post =>
            <PostItem post={post} key={post.id}/>
        )}
        </div>
    )
}

export default PostList;