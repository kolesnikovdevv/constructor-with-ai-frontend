import { useState } from "react"
import { ReactSortable } from "react-sortablejs"
import { getComponent } from "../../modules/layout-builder/utils"
import { v4 as uuid } from "uuid"

export const PopUpMenu = (props) => {
  const [leftList, setLeftList] = useState([
    {
      id: 243636,
      content: "ffff",
      width: 3,
      type: "text",
      parent_id: 1,
      chosen: false,
      selected: false,
    },
    {
      id: 23453454,
      content: "sssd",
      width: 3,
      type: "text",
      parent_id: 1,
      chosen: false,
      selected: false,
    },
  ])

  return (
    <ReactSortable
      className="p-4 pt-20 bg-cod_gray h-full overflow-y-auto"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      list={leftList}
      setList={setLeftList}
      sort={false}
      group={{
        name: "grouping",
        pull: "clone",
        put: false,
      }}
      clone={(item) => ({ ...item, id: uuid() })}
    >
      {leftList.map((item) => (
        <div
          key={item.id}
          sx={{
            backgroundColor: "gray",
            padding: "10px",
            marginBottom: "12px",
          }}
        >
          {item.content}
        </div>
      ))}
    </ReactSortable>
  )
}
