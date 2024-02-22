import { ParameterField } from "../../components/parameter-field/parameter-field"
import { UniversalHeader } from "../../ui/universal-header/universal-header"

export const StylePanel: React.FC = () => {
  return (
    <div className=" z-50 w-1/6 p-4 pt-20 bg-cod_gray flex-col border-r border-masala">
      <div className="">
        <UniversalHeader title="Sizes" titleClassName="mb-4 "></UniversalHeader>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <div className="w-full border-t-2 opacity-10 border-white mt-6 mb-2"></div>
        <UniversalHeader title="Sizes" titleClassName="mb-4 "></UniversalHeader>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <div className="w-full border-t-2 opacity-10 border-white mt-6 mb-2"></div>
        <UniversalHeader title="Sizes" titleClassName="mb-4 "></UniversalHeader>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <ParameterField title="text" value="priver aaa"></ParameterField>
        <div className="w-full border-t-2 opacity-10 border-white mt-6 mb-2"></div>
      </div>
    </div>
  )
}
