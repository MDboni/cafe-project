import { useEffect, useState } from "react"
import Bloge from "../Bloge/Bloge"

const Bloges = ({handelAddBookmarks}) => {

    const [bloge,setbloge] = useState([])

    useEffect(()=>{
        fetch('bloge.json')
        .then(res => res.json())
        .then(data => setbloge(data))
    },[])

  return (
    <div className="w-[70%] mr-15">
        {
            bloge.map(item => <Bloge key={item.id} item={item} handelAddBookmarks={handelAddBookmarks}/>)
        }
    </div>
  )
}

export default Bloges