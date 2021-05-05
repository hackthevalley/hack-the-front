import { useState } from "react";
import { checkbox } from './Checkbox.module.scss';

export default function Checkbox(label) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <label className={checkbox}>
                <input
                    type="checkbox"
                    value={label.text}
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                {label.text}
            </label>
        </div>
    );
}
