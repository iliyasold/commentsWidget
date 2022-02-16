import CommentItem from './CommentItem';

function CommentList(props) {
    const {comments} = props;

    return (
        <ul className="CommentList list">
            <h2 className="second-title CommentList-title">Все комментарии</h2>

            {comments.map((comment, position) => {
                    return <CommentItem
                        key={comment.itemId}
                        userName={comment.userName}
                        commentText={comment.commentText}
                        currentDate={comment.currentDate}
                        currentTime={comment.currentTime}
                        removeItem={() => props.removeCommentItem(position)}
                    />
                }
            )}
        </ul>
    )
}

export default CommentList;