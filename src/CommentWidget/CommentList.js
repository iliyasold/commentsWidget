import CommentItem from './CommentItem';
import {useState} from "react";

function CommentList(props) {
    const {comments} = props;

    const [items, setItems] = useState([comments]);

    function removeCommentItem(itemId) {
        const newListItem = items.filter(item => item.itemId !== itemId);

        setItems(newListItem);

        console.log(newListItem)
    }

    return (
        <ul className="CommentList list">
            <h2 className="second-title CommentList-title">Все комментарии</h2>

            {comments.map((comment) => {
                    return <CommentItem
                        key={comment.itemId}
                        userName={comment.userName}
                        commentText={comment.commentText}
                        currentDate={comment.currentDate}
                        currentTime={comment.currentTime}
                        removeItem={() => removeCommentItem(comment.itemId)}
                    />
                }
            )}
        </ul>
    )
}

export default CommentList;