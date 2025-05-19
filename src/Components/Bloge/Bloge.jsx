import { CiBookmark } from "react-icons/ci";

const Bloge = ({item,handelAddBookmarks}) => {
    const {cover,title,hashtag,authore_img,authore,poste_date,reading_time} =item
  return (
    <div >
        {
           <img className="my-5" src={cover}  alt="" />
        }
        <div className="flex justify-between items-center my-5">
            <div className="flex items-center">
               <img className="w-14 my-3" src={authore_img} alt="" />
               <div className="ms-3">
                 <h3>{authore}</h3>
                 <p>{poste_date}</p>
               </div>
            </div>
            <div className="flex items-center">
               <p>{reading_time} min read</p>
               <CiBookmark onClick={handelAddBookmarks} className="text-4xl ml-3"/>
            </div>
        </div>
        <h1 className="text-3xl">{title}</h1>
        <p>{hashtag.map((item,i) => <span key={i}><a href="#">{item}</a></span>)}</p>
        <button  className="underline my-4">merk as right</button>

<hr />

    </div>
  )
}

export default Bloge