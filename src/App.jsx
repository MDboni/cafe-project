import { useState } from "react"
import Bloges from "./Components/Bloges/Bloges"
import Bookmark from "./Components/Bookmark/Bookmark"
import Header from "./Components/Header/Header"

const App = () => {
  const [bookmarks,setBookmarks] = useState([])

  const handelAddBookmarks = bloge => {
    const newBookmark = [...bookmarks,bloge]
    setBookmarks(newBookmark)
  }


  return (
    <div>
      
      <Header/>


      <div className='flex mx-25'>
        <Bloges handelAddBookmarks={handelAddBookmarks}/>
        <Bookmark bookmarks={bookmarks}/>
      </div>
 
    </div>
  )
}

export default App