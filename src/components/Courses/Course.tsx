import { ICourse } from "../../App"



const Course = ({name, bgColor, image}: ICourse) => {
  return (
    <div className="course">
        <div className="course__img" style={{backgroundColor: `${bgColor}`}}>
            <img src={image}/>
        </div>
        <div className="course__name">
          <p>{name}</p>
        </div>
    </div>
  )
}

export default Course