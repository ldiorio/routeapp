import { useState } from "react"

export function useToggle() {
  const [value, setValue] = useState(false)

  function toggleValue(value) {
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }

  return [value, toggleValue]
}