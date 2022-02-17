import { BsTrash } from 'react-icons/bs';

function CommentItem(props) {
    return(
        <li className="CommentItem" id={props.itemId}>
            <div className="CommentItem-wrap">
                <span className="СommentItem-span СommentItem-name">{props.userName}</span>

                <span className="СommentItem-span СommentItem-text">{props.commentText}</span>

                <span className="СommentItem-span СommentItem-data">{props.currentDate} в {props.currentTime}</span>
            </div>

            <span className="СommentItem-span CommentItem-btn-delete">
                <div>
                    <BsTrash onClick={props.removeItem} />
                </div>
            </span>
        </li>
    )
}

export default CommentItem;