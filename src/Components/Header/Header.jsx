import img from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center my-5 mx-25 border-b'>
        <h2 className='text-2xl pb-2'>Knowladge Cafe</h2>
        <img className='pb-3' src={img} alt="" />
    </div>
  )
}

export default Header