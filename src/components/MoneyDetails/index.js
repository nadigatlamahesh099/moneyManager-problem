import './index.css'

const MoneyDetails = props => {
  const {mainBalance, incomeBalance, expensesBalance} = props

  return (
    <>
      <div className="balance-container balance">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="headM"> Your Balance </p>
          <p className="para" testid="balanceAmount">
            RS {mainBalance}
          </p>
        </div>
      </div>

      <div className="income-container balance">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div>
          <p className="headM"> Your Income</p>
          <p className="para" testid="incomeAmount">
            RS {incomeBalance}
          </p>
        </div>
      </div>

      <div className="expenses-container balance">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="headM"> Your Expenses</p>
          <p className="para" testid="expensesAmount">
            RS {expensesBalance}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
