
export const required = (value) => {
  return (typeof value !== 'undefined' ? undefined : "Required")
}

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined

export const maxValue = (max) => (value) =>
  value && value > max ? `Must be ${max} or less` : undefined
