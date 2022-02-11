import {useState} from 'react';
import swal from 'sweetalert';
import uuid from 'react-uuid'

function CommentForm(props) {
    const [commentText, setCommentText] = useState('');
    const [userName, setUserName] = useState('');

    const getCommentText = (e) => { setCommentText(e.target.value) }
    const getUserName = (e) => { setUserName(e.target.value) }

    const itemId = uuid();

    function handleClick(e) {
        e.preventDefault();

        if (commentText === '' && userName === '') {
            swal({
                title: 'Вообще ничего не напишешь?',
                icon: 'warning'
            })
        } else if (commentText === '') {
            swal({
                title: 'Про текст забыл!',
                icon: 'warning'
            })
        } else if (userName === '') {
            swal({
                title: 'Представиться бы надо!',
                icon: 'warning'
            })
        } else {
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

            props.addNewItem({
                itemId,
                commentText,
                userName,
                currentDate,
                currentTime
            })

            document.getElementById("commentForm").reset();

            setCommentText('');
            setUserName('');
        }
    }

    return (
        <form className="CommentForm" id="commentForm">
            <textarea onChange={getCommentText} className="text-area" cols="60" rows="15"
                      name="text" placeholder="Напишите что-нибудь"
            />

            <div className="wrapper">
                <input onChange={getUserName} className="userName-input" type="text"
                       name="name" placeholder="Ваше имя"
                />

                <input onClick={handleClick} className="btn btn-form CommentForm-btn" type="button"
                       name="submit" value="Отправить"
                />
            </div>
        </form>
    )
}

export default CommentForm;