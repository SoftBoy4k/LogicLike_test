

interface Props {
    id: number,
    textContent: string
    isActive: boolean,
    setActiveSidebarElement: (id: number) => void
}

const SidebarElement = ({id, isActive, textContent, setActiveSidebarElement}: Props) => {
  return (
    <li className={isActive ? 'sidebar__element sidebar__element-active' : 'sidebar__element'} onClick={() => setActiveSidebarElement(id)}>
        {textContent}
    </li>
  )
}

export default SidebarElement