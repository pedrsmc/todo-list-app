import styles from './index.module.css'

export function Task(props) {
    return (
        <div className={styles.task}>
            <p className={`${props.taskItem.status && styles.completed}`}>
                {props.taskItem.id}. {props.taskItem.title}
            </p >
            <button onClick={() => props.taskCompleted(props.taskItem.id)} className={styles.taskButton}><i className="fa-solid fa-check"></i></button>
        </div>
    )
}