function TopItem(props) {

    return(
        <li className="CommentItem TopItem">
            <div className="CommentItem-wrap">
                <span className="–°ommentItem-span –°ommentItem-name">
                    {props.userName}
                </span>
            </div>
        </li>
    )
}

export default TopItem;