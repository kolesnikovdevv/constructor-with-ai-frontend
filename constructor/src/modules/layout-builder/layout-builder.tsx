import { useState } from "react"
import { ReactSortable } from "react-sortablejs"
import { getComponent } from "../../components/pop-up-menu/utils"
import { v4 as uuid } from "uuid"
import { PopUpMenu } from "../../components/pop-up-menu/pop-up-menu"

export const LayoutBuilder = () => {
  const [rightList, setRightList] = useState([])
  const [formObjects, setFormObjects] = useState({})

  console.log({ rightList, formObjects })
  return (
    <ReactSortable
      className=" bg-white w-1/2 mt-20 mr-20 items-center h-3/4 text-stone-950"
      preventOnFilter={false}
      dragoverBubble={true}
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      sort={true}
      group={{
        name: "grouping",
        pull: false,
        put: true,
      }}
      list={rightList}
      setList={setRightList}
    >
      {rightList.map((item) => (
        <div key={item.id}>
          {getComponent(item.name, item.id, setFormObjects, formObjects)}
          <div
            onClick={() => {
              const newData = rightList.filter(
                (itemFilter) => itemFilter.id !== item.id
              )
              setRightList(newData)
            }}
          >
            remove
          </div>
        </div>
      ))}
    </ReactSortable>
  )
}
