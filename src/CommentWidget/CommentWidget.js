import CommentForm from './CommentForm'
import CommentList from './CommentList'
import CommentatorsTop from "./CommentatorsTop";
import { useState } from 'react';

function CommentWidget() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        const newItems = [...items]

        newItems.push(item)

        setItems(newItems);
    }

    return (
        <div className="CommentWidget">
            <div className="CommentForm-wrap">
                <CommentForm addNewItem={ addItem } />

                <CommentList comments={ items } />
            </div>

            <CommentatorsTop names={ items } />
        </div>
    )
}

export default CommentWidget;