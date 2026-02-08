import { useEffect, useState } from 'react';
import './MainPage.css';
import NavigationPanel from './NavigationPanel';
import CoursePanel from './CoursePanel';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/get-courses-with-authors");
        if (!response.ok) throw new Error("Response not OK");
        const json = await response.json();
        setCourses(json);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <CoursePanel courses={courses}/>
    </>
  );
}

export default App;
