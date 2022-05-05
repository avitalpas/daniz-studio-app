import React from 'react'

export default function Total(props) {
  return (

    <div className="home-total">

      <h5>פעילות עד היום</h5>

      <div className="total-row">

        {/* total students */}
        <div className="total-div">
          <p>סה"כ תלמידים</p>
          <p className='amount'>{props.students.length}</p>
        </div>

        {/* total lessons */}
        <div className="total-div">
          <p>סה"כ שיעורים</p>
          <p className='amount'>{props.lessons.length}</p>
        </div>

        {/* total musics */}
        <div className="total-div">
          <p>סה"כ יצירות</p>
          <p className='amount'>{props.musics.length}</p>
        </div>
      </div>
    </div>
  )
}
