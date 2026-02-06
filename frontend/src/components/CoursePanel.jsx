import FilterPanel from './FilterPanel';
import CourseCard from './CourseCard';

function CoursePanel({ courses }) {

    console.log(courses)

    const courseCards = []
    courses.forEach((c, index) => {
        courseCards.push(
            <CourseCard key={index} course={c}/>
        )
    });

    return (
      <div>
        <FilterPanel/>
        <div className="coursePanelGrid">
            {courseCards} 
        </div>
      </div>
    );
}

export default CoursePanel;