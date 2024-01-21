import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <dl>
                <dt><b>{props.post.title}</b></dt>
                <dd>{props.post.body}</dd>
            </dl>
        </div>
    )
}

export default PostItem;