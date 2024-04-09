const Input = ({ ref, label, labelClass, inputClass, ...props }) => {
  return (
    <>
      <label className={labelClass} >{label}</label>
      <input ref={ref} className={inputClass}  {...props} />
    </>
  )
}

export default Input
