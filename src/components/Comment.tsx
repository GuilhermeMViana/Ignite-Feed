import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( {content, onDeleteComment}:CommentProps ) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {

        
        if (likeCount > 0) {
            setLikeCount((state) => {
                return state - 1;
            })
        } else {
            setLikeCount((state) => {
                return state + 1;
            })
        }
        
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='15 de Abril às 00:20' dateTime='15/04/2023 00:20'>Cerca de 1h atrás</time>
                        </div>

                        <button onMouseDown={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onMouseDown={handleLikeComment}>
                        <ThumbsUp size={20}/> Aplaudir <span>{likeCount}</span>
                    </button>  
                </footer>
            </div>
        </div>
    )
}