import { checkbox, text } from './Checkbox.module.scss';

export default function Checkbox(props) {
    return (
        <div>
            <input
                className={checkbox}
                name='agreement_text'
                type="checkbox"
                value={props.text}
            />
            <label className={text} htmlFor='agreement_text'>
                {props.text}
            </label>
        </div>
    );
}
