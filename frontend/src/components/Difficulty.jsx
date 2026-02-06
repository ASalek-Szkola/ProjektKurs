import styles from './Difficulty.module.css'

export default function Difficulty({ difficulty }) {
    switch (difficulty) {
        case "Easy":
            return <div className={styles['difficultyDiv']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3 14a2 2 0 012-2h.5a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z"></path><path fill="currentColor" fillRule="evenodd" d="M19 3.5h-1a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5zM18 2a2 2 0 00-2 2v16a2 2 0 002 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1zM12.25 8.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5zm-1-1.5a2 2 0 00-2 2v11a2 2 0 002 2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z" clipRule="evenodd"></path></svg>
                <span>Łatwy</span>
            </div>
        case "Medium":
            return <div className={styles['difficultyDiv']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 14a2 2 0 012-2h.5a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6zM12.25 8.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5zm-1-1.5a2 2 0 00-2 2v11a2 2 0 002 2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                    <path fill="currentColor" fillRule="evenodd" d="M19 3.5h-1a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5zM18 2a2 2 0 00-2 2v16a2 2 0 002 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1z" clipRule="evenodd"></path>
                </svg>
                <span>Średni</span>
            </div>
        case "Hard":
            return <div className={styles['difficultyDiv']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 14a2 2 0 012-2h.5a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6zM19 3.5h-1a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5zM18 2a2 2 0 00-2 2v16a2 2 0 002 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1zM12.25 8.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5zm-1-1.5a2 2 0 00-2 2v11a2 2 0 002 2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                </svg>
                <span>Trudny</span>
            </div>
    }

}