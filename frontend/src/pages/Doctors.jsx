import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const{doctors} = useContext(AppContext)

  return (
    <div>
        <p>Browse through the doctors specialist.</p>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Doctors
