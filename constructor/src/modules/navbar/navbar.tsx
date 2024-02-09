import { UniversalIcon } from "../../ui/universal-icon/universal-icon"
import logo from "../../icons/logo/logo-icon.svg"
import export_icon from "../../icons/navbar/export-icon.svg"
import a_icon from "../../icons/navbar/a.svg"
import pen_icon from "../../icons/navbar/pen-icon.svg"
export const Navbar: React.FC = () => {
  return (
    <div className="absolute px-4 py-2 flex justify-between items-center w-full bg-cod_gray border-b border-masala">
      <button>
        <img className="w-12" src={logo} alt="" />
      </button>

      <div className="absolute inset-x-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <div className="flex">
          <p className="mr-2">Untitled</p>
          <button>
            <img src={pen_icon} alt="" />
          </button>
        </div>
      </div>

      <div className="flex">
        <button>
          <UniversalIcon icon={export_icon}></UniversalIcon>
        </button>
        <button>
          <UniversalIcon icon={a_icon} orangeBackground={true}></UniversalIcon>
        </button>
      </div>
    </div>
  )
}
