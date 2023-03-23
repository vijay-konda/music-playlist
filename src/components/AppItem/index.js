import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const AppItem = props => {
  const {details, deleteSong} = props
  const {id, genre, name, imageUrl, duration} = details

  const ok = () => {
    deleteSong(id)
  }
  return (
    <li className="app-list">
      <div className="play-list">
        <div className="genre-con">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="delete-container">
          <p className="duration">{duration}</p>
          <button
            className="button"
            type="button"
            data-testid="delete"
            onClick={ok}
          >
            <AiOutlineDelete className="del" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppItem
