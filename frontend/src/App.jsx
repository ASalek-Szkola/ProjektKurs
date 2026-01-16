import { useEffect, useState } from 'react';
import './App.css';
import NavigationPanel from './components/NavigationPanel';
import CoursePanel from './components/CoursePanel';

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
      <NavigationPanel/>
      <CoursePanel courses={courses}/>
      <button onClick={() => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
        this.textContent = body.classList.contains("dark") ? "Change to Light Mode" : "Change to Dark Mode";
      }}>Change to Dark Mode</button>

    </>
  );
}

export default App;
