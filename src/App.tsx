import { useEffect, useState, useCallback, useMemo } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';
import Courses from './components/Courses/Courses';

export interface ICourse {
  id: string;
  name: string;
  image: string;
  bgColor: string;
}

export interface Data extends ICourse {
  tags: string[];
}

const App = () => {
  const [allCourses, setAllCourses] = useState<Data[]>([]);
  const [allTags, setAllTags] = useState<string[]>(['Все темы']);
  const [activeSidebarElement, setActiveSidebarElement] = useState(0);

  const getCourses = useCallback(async () => {
    try {
      const response = await axios.get('https://logiclike.com/docs/courses.json');
      setAllCourses(response.data);
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setTags = useCallback((data: Data[]) => {
    const currentTags: string[] = ['Все темы'];
    for (const el of data) {
      el.tags.forEach(tag => {
        if (!currentTags.includes(tag)) currentTags.push(tag);
      });
    }
    setAllTags(currentTags);
  }, []);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const filteredCourses = useMemo(() => {
    if (activeSidebarElement === 0) {
      return allCourses;
    }
    return allCourses.filter(course => course.tags.includes(allTags[activeSidebarElement]));
  }, [activeSidebarElement, allCourses, allTags]);

  return (
    <div className="app">
      <Sidebar 
        tags={allTags} 
        activeSidebarElement={activeSidebarElement} 
        setActiveSidebarElement={setActiveSidebarElement} 
      />
      <Courses courses={filteredCourses} />
    </div>
  );
};

export default App;
