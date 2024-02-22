import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ReactSortable } from "react-sortablejs"
import { changingList } from "../../state/chosen-сomponents/chosen-сomponents"

export const PopUpMenu: React.FC<PopUpMenuProps> = ({ selectedItem }) => {
  const [list1, setList1] = useState([
    { id: 1, name: "Item  1" },
    { id: 2, name: "Item  2" },
  ])

  const [list2, setList2] = useState([])

  const dispatch = useDispatch()

  const clone = (item) => {
    return { ...item, id: Math.random() }
  }

  useEffect(() => {
    dispatch(changingList(list2))
  }, [list2, dispatch])

  return (
    <div>
      {selectedItem === "pages" && (
        <div className=" p-4 pt-20 bg-cod_gray h-full w-96 flex overflow-y-auto">
          <div className="flex">
            <ReactSortable
              list={list1.map((item) => ({ ...item }))} // Convert objects to arrays
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
              className=" m-2 p-2 bg-cod_gray h-40 w-50 flex flex-wrap overflow-y-auto"
              list={list2.map((item) => ({ ...item }))} // Convert objects to arrays
              setList={setList2}
              animation={200}
              group={{ name: "shared", pull: true }}
            >
              {list2.map((item) => (
                <div className="p-2" key={item.id}>
                  {item.name}
                </div>
              ))}
            </ReactSortable>
          </div>
        </div>
      )}
      {/* Your other code */}
    </div>
  )
}
