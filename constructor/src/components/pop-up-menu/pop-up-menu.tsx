interface PopUpMenuProps {
  selectedItem: string
}
import block1 from "../../icons/elements/pop-up-menu/block-1.svg"
export const PopUpMenu: React.FC<PopUpMenuProps> = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem === "pages" && (
        <div className=" p-4 pt-20 bg-cod_gray h-full flex flex-col overflow-y-auto">
          <div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <img className="w-full" src={block1} alt="" />
            </div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <img className="w-full" src={block1} alt="" />
            </div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <img className="w-full" src={block1} alt="" />
            </div>
            <div className="p-4 bg-shark rounded-lg mb-3 cursor-pointer">
              <img className="w-full" src={block1} alt="" />
            </div>
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
