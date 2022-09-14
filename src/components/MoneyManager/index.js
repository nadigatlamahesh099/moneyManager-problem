import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    mainBalance: 0,
    incomeBalance: 0,
    expensesBalance: 0,
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
    titleName: '',
    amountValue: '',
  }

  onChangeInput = event => {
    this.setState({amountValue: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleName: event.target.value})
  }

  onChangeSelectInput = event => {
    this.setState({optionId: event.target.value})
  }

  historyDeleted = (id, optionId, Amount) => {
    const {transactionList} = this.state
    this.setState({
      transactionList: transactionList.filter(
        transaction => transaction.id !== id,
      ),
    })

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        mainBalance: parseInt(prevState.incomeBalance) - parseInt(Amount),
        incomeBalance: parseInt(prevState.incomeBalance) - parseInt(Amount),
      }))
    } else {
      this.setState(prevState => ({
        mainBalance: parseInt(prevState.mainBalance) + parseInt(Amount),
        expensesBalance: parseInt(prevState.expensesBalance) - parseInt(Amount),
      }))
    }
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {optionId, amountValue, titleName} = this.state

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        mainBalance: parseInt(prevState.incomeBalance) + parseInt(amountValue),
        incomeBalance:
          parseInt(prevState.incomeBalance) + parseInt(amountValue),
        titleName: '',
        amountValue: '',
      }))
    } else {
      this.setState(prevState => ({
        mainBalance: parseInt(prevState.mainBalance) - parseInt(amountValue),
        incomeBalance: parseInt(prevState.incomeBalance),
        expensesBalance:
          parseInt(prevState.expensesBalance) + parseInt(amountValue),
        titleName: '',
        amountValue: '',
      }))
    }
    const newTransaction = {
      id: v4(),
      salaryTitle: titleName,
      Amount: amountValue,
      Type: optionId,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png ',
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
    }))
  }

  render() {
    const {
      titleName,
      amountValue,
      mainBalance,
      incomeBalance,
      expensesBalance,
      transactionList,
    } = this.state

    return (
      <>
        <div className="sub-container">
          <h1>Hi Mahesh </h1>
          <p>
            Welcome back to your
            <span className="money-head"> Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails
            mainBalance={mainBalance}
            incomeBalance={incomeBalance}
            expensesBalance={expensesBalance}
          />
        </div>
        <div className="manager-container">
          <div className="add-appointment-container">
            <form className="form" onSubmit={this.onAddAppointment}>
              <h1 className="head">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleName}
                onChange={this.onChangeTitleInput}
                className="input"
                placeholder="Title"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="Amount"
                value={amountValue}
                className="input"
                onChange={this.onChangeInput}
              />
              <label htmlFor="test" className="label">
                TYPE
              </label>

              <select
                id="test"
                className="input"
                onChange={this.onChangeSelectInput}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="add-appointment-container1">
            <h1 className="head">history</h1>
            <div className="history-container1">
              <p className="title">Title</p>
              <p className="title">Amount</p>
              <p className="title"> Type</p>
            </div>
            <ul>
              {transactionList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  TransactionItems={eachItem}
                  historyDeleted={this.historyDeleted}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager
