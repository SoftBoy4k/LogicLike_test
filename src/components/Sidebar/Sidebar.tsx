import './Sidebar.scss'
import SidebarElement from './SidebarElement';

interface Props {
  tags: string[],
  activeSidebarElement: number,
  setActiveSidebarElement: (id: number) => void,
}

const Sidebar = ({tags, activeSidebarElement, setActiveSidebarElement}: Props) => {

  return (
    <ul className='sidebar'>
      {tags 
        ? tags.map((el, i) => <SidebarElement 
          key={i} 
          id={i}
          textContent={el} 
          isActive={activeSidebarElement === i}
          setActiveSidebarElement={setActiveSidebarElement}
        />) 
        : undefined}
    </ul>
  )
}

export default Sidebar