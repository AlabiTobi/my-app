import React, { useState } from 'react'
import Input from '../../reusables/Input'
import { BsFillSlashSquareFill } from "react-icons/bs"

const CreateEventDetails = (props) => {
const { setEventDetails, eventDetails} = props

const [fieldError, setFieldError]= useState(
    {
        eventName: {message: "", error: false},
        location: {message: "", error: false},
        description: { message: "", error: false},
    }
)

const handleChange = (e) =>{
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value })
}

  return (
    <div>
        <Input text="eventName" handleChange={handleChange}
        icon={<BsFillSlashSquareFill />} 
        label="eventName" fieldError={fieldError} />
    </div>
  )
}

export default CreateEventDetails