import { Button } from "@mui/material";
import { useEffect, useState } from 'react';

function SizeButton({ value, checked, setSize, setCheckedIdx, idx }) {
    const componentColor = '#48B5FE'
    const styles = checked ? {
        border: `1px solid ${componentColor}`,
        color: componentColor
    } : {
        border: '1px solid #E4E4E4',
        color: '#000'
    };

    const handleClick = () => {
        setSize(value);
        setCheckedIdx(idx);
    }

    return <Button sx={styles} onClick={handleClick}>{value}</Button>
}

export default function SizeSelector(props) {    
    const values = ["Sólo yo", "2 - 10", "11 - 25", "26 - 50", "51 - 100", "500 +"];
    const [checkedIdx, setCheckedIdx] = useState(0);

    useEffect(() => {
        props.size === 'Sólo yo' && setCheckedIdx(0)
    }, [props.size]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly"
        }}>
            {values.map((value, idx) => <SizeButton
                    key={idx}
                    value={value} 
                    checked={idx === checkedIdx} 
                    setSize={props.setSize}
                    setCheckedIdx={setCheckedIdx}
                    idx={idx}
                />
            )}
        </div>
    );
}

