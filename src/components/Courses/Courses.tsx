import { ICourse } from "../../App"
import Course from "./Course";
import './Courses.scss'

interface Props {
    courses: ICourse[]
}

const Courses = ({courses}: Props) => {
  return (
    <ul className="courses">
        {courses.map(({id, name, bgColor, image}) => <Course key={id} id={id} name={name} bgColor={bgColor} image={image}/>)}
    </ul>
  )
}

export default Courses