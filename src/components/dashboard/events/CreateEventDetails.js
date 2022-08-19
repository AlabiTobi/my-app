import React, { useState } from 'react'
import Input from '../../reusables/Input'
import { BsFillSlashSquareFill } from "react-icons/bs"
import { useDispatch } from 'react-redux/es/exports'
import { addItemToEvents } from '../../../redux/actions/events'

const CreateEventDetails = (props) => {
const { setEventDetails, eventDetails} = props

const dispatch = useDispatch()

const [fieldError, setFieldError]= useState(
    {
        title: {message: "", error: false},
        location: {message: "", error: false},
        description: { message: "", error: false},
    }
)

const handleChange = (e) =>{
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value })
}

const handleClick=()=>{
    
    dispatch(addItemToEvents(eventDetails))
}

  return (
    <div>
        <Input text="title" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color="white"/>} 
        label="title" fieldError={fieldError} />

        <Input text="location" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color="white"/>} 
        label="location" fieldError={fieldError} />

        <Input text="description" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color="white"/>} 
        label="description" fieldError={fieldError} />

        <button onClick={handleClick}>
            Create Event
        </button>
    </div>
  )
}

export default CreateEventDetails