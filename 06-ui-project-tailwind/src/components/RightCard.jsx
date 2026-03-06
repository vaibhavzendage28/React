import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div id='right-card' className='h-full w-70 rounded-4xl overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src={props.user.img} alt="" />
        <RightCardContent idx={props.idx} user={props.user} />
    </div>
  )
}

export default RightCard