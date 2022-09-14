import './index.css'

const TransactionItem = props => {
  const {TransactionItems, historyDeleted} = props
  const {id, salaryTitle, Amount, Type, imageUrl} = TransactionItems

  const onDelete = () => {
    historyDeleted(id, Type, Amount)
  }

  return (
    <li key={id} className="history-container">
      <p className="title">{salaryTitle}</p>
      <p className="title">{Amount}</p>
      <p className="title">{Type}</p>
      <button
        type="button"
        className="button-delete"
        onClick={onDelete}
        testid="delete"
      >
        <img src={imageUrl} alt="delete" className="delete-icon" />
      </button>
    </li>
  )
}

export default TransactionItem
