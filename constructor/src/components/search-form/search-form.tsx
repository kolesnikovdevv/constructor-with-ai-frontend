import { ArrowButton } from "../../ui/arrow-button/arrow-button"

interface SearchFormProps {
  icon: string
  placeholder: string
}

export const SearchForm: React.FC<SearchFormProps> = ({
  icon,
  placeholder,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Добавьте обработчик отправки формы здесь
  }

  return (
    <form className="mb-4 relative" onSubmit={handleSubmit}>
      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img
            src={icon}
            alt="Search Icon"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-3 pl-10 pr-12 text-sm text-gray-900 border rounded-lg bg-woodsmoke dark:bg-woodsmoke dark:border-woodsmoke dark:text-white"
          placeholder={placeholder}
          required
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
          <ArrowButton />
        </div>
      </div>
    </form>
  )
}
