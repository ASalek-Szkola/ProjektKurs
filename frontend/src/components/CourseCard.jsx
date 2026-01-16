import styles from "./CourseCard.module.css";

import AddToCartButton from "./AddToCartButton";
import Difficulty from "./Difficulty";

function CourseCard({ course }) {
  return (
    <article className={styles['courseCard']}>
      <figure className={styles['courseCardFigure']}>
        <img className={styles['courseImage']} alt="img" loading="lazy" width="1280" height="800" decoding="async" src="https://sklep.szurek.tv/img/bezpieczny_programista.png"></img>
        {/* <img src={"./assets/adam_coding.png"} alt={course.name} className="courseCardImg"/> */}
      </figure>
      <div className={styles['courseCardBody']}>
        <div>
          <h3 className={styles['courseCardName']}>{course.name}</h3>
          <p className={styles['courseCardDescription']}>{course.description}</p>
        </div>
        <div className={styles['infoPriceDiv']}>
          <ul className={styles['infoList']}>
            <li>
              <Difficulty difficulty={course.difficulty} />
            </li>
            <li>
              <div className={styles['liczbaGodzin']}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
                <span>Liczba godzin</span>
              </div>
            </li>
          </ul>
          <div className={styles['courseCardPrice']}>
            <span>{course.price} PLN</span>
          </div>
        </div>
      </div>


      <AddToCartButton />
    </article>
  );
}

export default CourseCard;