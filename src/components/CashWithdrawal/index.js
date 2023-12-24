// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="profile">
            <p className="initial">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-cont">
            <p className="balance">Your Balance</p>
            <div className="rupees-cont">
              <p className="rupees">{amount}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="sum-rupees">CHOOSE SUM(IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(each => (
              <DenominationItem
                eachValue={each}
                key={each.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
