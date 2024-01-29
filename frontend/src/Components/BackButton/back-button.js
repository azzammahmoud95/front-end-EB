import ArrowBack from '../../Assets/Images/arrow_back.svg'
import './back-button.scss'
export default function BackButton({ onClick }) {
  return (
    <div className='BackButtonWrapper' onClick={onClick}>
                <img src={ArrowBack} width={25 } height={25} alt='backicon'/>
                <div className='BackButtonLabel'>Back</div>

    </div>
  )
}
