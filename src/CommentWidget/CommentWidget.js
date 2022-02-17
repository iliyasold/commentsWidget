import CommentForm from './CommentForm'
import CommentList from './CommentList'
import CommentatorsTop from "./CommentatorsTop";
import {useState} from 'react';

function CommentWidget() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        const newItems = [...items]

        newItems.push(item)

        setItems(newItems);
    }

    function removeCommentItem(position) {
        if (window.confirm('Удалить?')) {
            const newListItem = [...items]

            newListItem.splice(position,1);

            setItems(newListItem);
        }
    }

    return (
        <div className="CommentWidget">
            <div className="CommentForm-wrap">
                <CommentForm addNewItem={addItem}/>

                <CommentList comments={items} removeCommentItem={removeCommentItem}/>
            </div>

            <CommentatorsTop names={items}/>
        </div>
    )
}

export default CommentWidget;