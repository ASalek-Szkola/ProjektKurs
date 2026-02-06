import { useEffect, useState } from 'react';
import './MainPage.css';
import NavigationPanel from './components/NavigationPanel';
import CoursePanel from './components/CoursePanel';
import DarkModeGifSwitch from "./components/DarkModeGifSwitch";

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
      <DarkModeGifSwitch width={100} height={100} />
    </>
  );
}

export default App;
