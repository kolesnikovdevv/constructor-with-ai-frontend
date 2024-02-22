import { useDispatch, useSelector } from "react-redux"
import { ReactSortable } from "react-sortablejs"
import { changingList } from "../../state/chosen-сomponents/chosen-сomponents"
import { useState } from "react"

export const LayoutBuilder = () => {
  const listState = useSelector(
    (state) => state.chosenComponents.selectedComponents
  )

  const [list2, setList2] = useState(listState)

  return (
    <div className=" bg-white w-1/2 mt-20 mr-20 flex justify-center items-center h-3/4 text-stone-950">
      <ReactSortable
        // className=" m-2 p-2 bg-cod_gray h-40 w-50 flex flex-wrap overflow-y-auto"
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
  )
}
