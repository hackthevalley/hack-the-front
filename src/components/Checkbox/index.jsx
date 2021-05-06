import { checkbox, text } from './Checkbox.module.scss';

export default function Checkbox(label) {
    return (
        <div>
            <label className={text} htmlFor='agreement_text'>
                {label.text}
            </label>
            <input
                className={checkbox}
                name='agreement_text'
                type="checkbox"
                value={label.text}
            />
        </div>
    );
}
