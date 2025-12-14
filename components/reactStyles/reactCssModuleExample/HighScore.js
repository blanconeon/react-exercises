import { highScores as data } from './highScoreData';
import styles from './HighScore.module.css';


function HighScore() {
  return (
    <>
   <div className={styles.divStyle}>
   <ul>
   {data.map((player) => (
  <li key={player.username}>Name: {player.username}, Date: {player.date}, Score: {player.score}</li>))}
   </ul> 
   </div>
    </>
  )} 

  export default HighScore;