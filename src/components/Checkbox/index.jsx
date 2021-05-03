import { useState } from 'react';

export default function Checkbox(label) {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div>
            <label>
                <input type="checkbox" value={label} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                {label}
            </label>
        </div>
    )
}