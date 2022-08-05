import React,  { useEffect, useState } from 'react'
import './Graduates.css'
import Graduate from './Graduate'
import { getGraduates } from '../authentication/firebase'

const Graduates = () => {
  const [graduates, setGraduates] = useState([])

  useEffect(() => {
    getGraduates()
    .then((doc) => {
      console.log(doc.data);
    })
    // getGraduates.forEach((doc) => {
    //     setGraduates({
    //       id: doc.id,
    //       data: doc.data()
    //     })
    //   })
  }, [])

  return (
    <div className="graduates">
      {graduates.map(({ id, data }) => (
        <Graduate
          key={id}
          name={data.name}
          description={data.description}
          message={data.message}
          photoUrl={data.photoUrl}
          graduate={data.graduate}
          portfolio={data.portfolio}
          github={data.github}
        />
      ))
      }
    </div>
  );
}

export default Graduates;