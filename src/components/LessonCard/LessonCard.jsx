import React, { useState } from "react";
import "./lesson.css";
import { data } from "../../helper/data";

const LessonCard = () => {

  const [lessonList, setLessonList] = useState(data);

 
  const handleClear = () => {
    setLessonList([]); 
  };

  return (
    <div className="container">
      <h1 className="title-lesson">Today's {lessonList.length} Lessons</h1>
      <div className="lesson-card">
        
        {lessonList.map((lesson) => (
          <div className="lessons" key={lesson.id}>
            <div className="lesson-img">
              <img src={lesson.image} alt="" />
            </div>
            <div className="lesson-info">
              <p className="lesson-name">
                Lesson Name: <span>{lesson.name}</span>
              </p>
              <p className="lesson-hour">
                Lesson Hour: <span>{lesson.hour}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="clear-btn" onClick={handleClear}>
        Clear List
      </button>
    </div>
  );
};

export default LessonCard;
