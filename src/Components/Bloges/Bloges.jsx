import { useEffect, useState } from "react"

const Bloges = () => {

    const [bloge,setbloge] = useState([])

    useEffect(()=>{
        fetch('bloge.json')
        .then(res => res.json())
        .then(data => setbloge(data))
    },[])

  return (
    <div>
        {
        bloge.map(item => (
          <div key={item.id}>
            <img src={item.cover} alt={item.title} style={{ width: '500px' }} />
            <h2>{item.title}</h2>
            <p>Author: {item.authore}</p>
            <img src={item.authore_img} alt={item.authore} style={{ width: '50px', borderRadius: '50%' }} />
            <p>Date: {item.poste_date}</p>
            <p>Reading Time: {item.reading_time} min</p>
            <p>Tags: {item.hashtag.join(', ')}</p>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default Bloges