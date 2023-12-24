// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachValue, updateValue} = props
  const {value} = eachValue

  const onClickValue = () => {
    updateValue(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
