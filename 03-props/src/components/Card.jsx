import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1770034285769-4a5a3f410346?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>{props.user}</h2>
            <h3>[ {props.description} ]</h3>
            <p>{props.info}</p>
        </div>
    </div>
  )
}

export default Card