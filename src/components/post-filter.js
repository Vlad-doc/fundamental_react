import React from "react"
import MyInput from "./UI/input/my-input"
import MySelect from "./UI/select/my-select"

function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.querry}
        onChange={(event) =>
          setFilter({ ...filter, querry: event.target.value })
        }
      />
      <MySelect
        defaultValue={"Сортировка"}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  )
}

export default PostFilter
