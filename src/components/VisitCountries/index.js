import {Component} from 'react'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const EachCountryVisited = props => {
  const {eachCountryvisit, onClickRemoveBtn, isListContainsEmpty} = props
  const {id, name, imageUrl, isVisited} = eachCountryvisit
  const onClickRemove = () => {
    onClickRemoveBtn(eachCountryvisit)
  }
  if (isListContainsEmpty === undefined) {
    return
  }
  if (isVisited) {
    return (
      <li className="each-visited-country">
        <img src={imageUrl} alt="thumbnail" className="thumbnail-image-css" />
        <div className="bottom-container">
          <p>{name}</p>
          <button type="button" className="remove-btn" onClick={onClickRemove}>
            Remove
          </button>
        </div>
      </li>
    )
  }
  return null
}

const EachCountry = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, imageUrl, isVisited} = countryDetails
  const onClickVisitBtn = () => {
    onClickVisitButton(countryDetails)
  }
  return (
    <li className="eachCountryinList">
      <p>{name}</p>
      {isVisited ? (
        <p className="visited-para">Visited</p>
      ) : (
        <button type="button" className="visitBtn" onClick={onClickVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

class VisitCountries extends Component {
  state = {
    displayList: initialCountriesList,
  }

  onClickRemoveBtn = visitedObj => {
    const {displayList} = this.state
    const index = displayList.findIndex(eachVal => eachVal.id === visitedObj.id)
    const resObj = {
      ...visitedObj,
      isVisited: false,
    }
    displayList.splice(index, 1, resObj)
    this.setState({displayList})
  }

  onClickVisitButton = replaceObj => {
    const {displayList} = this.state
    const index = displayList.findIndex(eachVal => eachVal.id === replaceObj.id)
    const resObj = {
      ...replaceObj,
      isVisited: true,
    }
    displayList.splice(index, 1, resObj)
    this.setState({displayList})
  }

  render() {
    const {displayList} = this.state
    const isListContainsEmpty = displayList.find(
      each => each.isVisited === true,
    )
    return (
      <div className="app-container">
        <div className="blue-container">
          <h1>Countries</h1>
          <ul className="countries-list">
            {displayList.map(eachCountry => (
              <EachCountry
                key={eachCountry.id}
                countryDetails={eachCountry}
                onClickVisitButton={this.onClickVisitButton}
              />
            ))}
          </ul>
          <h1>Visited Countries</h1>
          {isListContainsEmpty === undefined ? (
            <p className="empty-list-text">No Countries Visited Yet</p>
          ) : (
            <ul className="visited-countries-list">
              {displayList.map(eachObj => (
                <EachCountryVisited
                  key={eachObj.id}
                  eachCountryvisit={eachObj}
                  onClickRemoveBtn={this.onClickRemoveBtn}
                  isListContainsEmpty={isListContainsEmpty}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default VisitCountries
