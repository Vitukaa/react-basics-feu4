import ArrowIcon from '../ArrowIcon';
import './LargeButton.css';

export default function LargeButton(props) {
  return props.text && (
    <a className="button-title" href={props.url ? props.url : './#'}>
      {props.text}

      {/* <svg xmlns='http://www.w3.org/2000/svg' width='19' height='33'>
        <path d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fillRule='evenodd'/>
      </svg> */}

      <ArrowIcon />
    </a>
  )
}