const Input = ({ ref, label, labelClass, inputClass, textArea, ...props }) => {
  return (
    <p>
      <label className={labelClass} >{label}</label>

      {textArea ? <textarea ref={ref} className={inputClass}  {...props} /> : <input ref={ref} className={inputClass}  {...props} />}
    </p>
  )
}

export default Input
