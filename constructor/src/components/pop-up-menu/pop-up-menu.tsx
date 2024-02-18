import block1 from "../../icons/elements/pop-up-menu/block-1.svg"
interface PopUpMenuProps {
  selectedItem: string
}
import React, { useState } from "react"
import { ReactSortable } from "react-sortablejs"
export const PopUpMenu: React.FC<PopUpMenuProps> = ({ selectedItem }) => {
  const [list1, setList1] = useState([
    { id: 1, name: "Item  1" },
    { id: 2, name: "Item  2" },
  ])

  const [list2, setList2] = useState([])

  // Функция для создания клона элемента
  const clone = (item) => {
    return { ...item, id: Math.random() } // Пример клонирования с новым уникальным ID
  }

  return (
    <div>
      {selectedItem === "pages" && (
        <div className=" p-4 pt-20 bg-cod_gray h-full w-96 flex overflow-y-auto">
          <div className="flex">
            <ReactSortable
              list={list1}
              setList={setList1}
              group={{ name: "shared", pull: "clone", put: false }}
              clone={clone}
              sort={false}
            >
              {list1.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </ReactSortable>

            <ReactSortable
              className=" p-4 pt-20 bg-cod_gray h-full w-96 flex overflow-y-auto"
              list={list2}
              setList={setList2}
              animation={200}
              group={{ name: "shared", pull: true }}
            >
              {list2.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </ReactSortable>
          </div>
        </div>
      )}
      {selectedItem === "blocks" && (
        <div className="p-4 pt-20 bg-cod_gray h-full flex flex-col overflow-y-auto">
          <div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <div className="h-24 w-full"></div>
            </div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <img className="w-full" src={block1} alt="" />
              {/* <img className="w-full" src={} alt="" /> */}
            </div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <div className="h-24"></div>
              {/* <img className="w-full" src={} alt="" /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
