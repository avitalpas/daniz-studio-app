import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function DayLessons(props) {

    const [hours, setHours] = useState([])
    const [students, setstudents] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (!isMounted) {
            setHours(setHoursArr())
            setstudents(props.students)
            setIsMounted(true)
        }
    })

    function setHoursArr() {
        let hoursArr = []
        let isHalfHour = false

        for (let i = 7; i <= 22; i++) {

            if (isHalfHour) {
                i--
                let hourObject = {
                    time: '-',
                    value: i + '5'
                }
                hoursArr.push(hourObject)
                isHalfHour = false

            } else {
                let hourObject = {
                    time: i + ':00',
                    value: i + '0'
                }
                hoursArr.push(hourObject)
                isHalfHour = true
            }
        }

        return hoursArr
    }

    function getHoursList() {
        return (
            <div className='hours-list'>
                {
                    hours.map((hour, index) => {
                        return <div key={index}>
                                    <span>{hour.time}</span>
                                </div>
                    })
                }
            </div>
        )
            
    }

    function getDayLessons(){
        let lessons = props.lessons

        return(
            <div>
                {
                    lessons.map( (lesson, index) => {
                        let lessonDate = new Date(lesson.date)
                        
                        if( lessonDate.getDate() == props.curDate.getDate() ){
                            
                            let lessonHour = document.querySelector('#hour-val-' + (lessonDate.getHours() +''+ (lessonDate.getMinutes()/6)))
                            const lessonDiv = (
                                <div id={lesson._id} className='lesson-details'>
                                    <div className='details'>
                                        <p>{formatLessonHours(lesson)}</p>
                                        <p>{getLessonStudent(lesson)}</p>
                                        <p>מיקום</p>
                                    </div>
                                    <div className='call-button'>
                                        {getCallButton(lesson)}
                                    </div>
                                </div>
                            )
                            ReactDOM.render(lessonDiv, lessonHour);

                        } 

        
                    })
                }
            </div>
        )
    }

    function getCallButton(lesson){

        let curStudent = props.students.find( stu => stu._id == lesson.studentID )
        if( curStudent != undefined ) {

            if( curStudent.mobile != null ){

                let callUrl = 'tel:' + curStudent.mobile
                return(
                    <a href={callUrl}>
                        <i class="fas fa-phone"></i>
                    </a>
                )
            } else {
                return(
                    <p>אין נייד</p>
                )
            }


        }

    }

    function getLessonStudent(lesson){

        let curStudent = props.students.find( stu => stu._id == lesson.studentID )
        if( curStudent != undefined ) return curStudent.name
        else return lesson.studentID
    }

    function formatLessonHours(lesson){
        let lessonDate = new Date(lesson.date)
        return lessonDate.getHours() +':'+ lessonDate.getMinutes()
    }


    function getDayCalendarGrid(){
        return(
            <div id='hour-val-divs'>
                {
                    hours.map(( hour, index ) => {
                        return (
                            <div id={'hour-val-' + hour.value} key={index} className='hour-value'><span></span></div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div id='day-lessons'>
            {getHoursList()}
            {getDayCalendarGrid()}
            {getDayLessons()}
        </div>
    )
}
