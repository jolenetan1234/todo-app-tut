const TodoCard = ({ data }) => {
  return (
    <div className="TodoCard">
        <div className="title-description">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>

        <div className="button-container">
            <button className="button">edit</button>
            <button className="button">delete</button>
        </div>
    </div>
  )
}

export default TodoCard;