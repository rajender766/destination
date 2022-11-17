/* eslint-disable react/sort-comp */
// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-item-container">
      <img className="destination-image" src={imgUrl} alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
