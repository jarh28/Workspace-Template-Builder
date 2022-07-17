import { Scale, Widgets } from "@mui/icons-material";
import { RadioGroup, FormControlLabel, Radio, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { ChromePicker } from "react-color";

const optionStyles = (color) => ({
    color: color, 
    backgroundColor: color,
    transform: "scale(0.9)",
    "&:hover": {
        backgroundColor: color,
    },
    "&.Mui-checked": {
        color: color,
        backgroundColor: "transparent",
        transform: "scale(2)"
    }
})

function ColorOption({ color, register }) {
    return (
        <FormControlLabel 
        value={color} 
        control={
            <Radio 
            sx={optionStyles(color)} />
        } 
        {...register("color")} />
    );
}

function ColorPicker({ color, setColor, register }) {
    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) => {
        console.log(event.currentTarget);
        setAnchor(event.currentTarget);
    };

    const handleBlur = () => {
        setAnchor(null);
    };

    const handleChange = (color) => {
        setColor(color.hex);
    };

    return (
            <>
            <FormControlLabel 
            value={color} 
            control={
                <Radio 
                sx={optionStyles(color)} />
            } 
            {...register("color")}
            onClick={handleClick} />
            <Menu 
            anchor={anchor} 
            open={Boolean(anchor)}>
                <MenuItem 
                onBlur={handleBlur}>
                    <ChromePicker 
                    disableAlhpa={true}
                    color={color}
                    onChange={handleChange} />
                </MenuItem>
            </Menu>
        </>
    );
}

export default function ColorSelector(props) {
    const colors = ["#39B0FF", "#04B58B", "#3E9C4B", "#B6BC00", "#E59100", "#E55C00", "#EE1F50", "#D6198A", "#B321F1"];
    
    const handleChange = (event) => {
        props.setColor(event.target.value);
    }

    return (
        <RadioGroup 
        defaultValue={colors[0]}
        value={props.color}
        onChange={handleChange}
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        }}>
            {colors.map((color, idx) => (
                <ColorOption 
                key={idx} 
                color={color} 
                register={props.register} />
            ))}
            <ColorPicker 
            color={props.color} 
            setColor={props.setColor} 
            register={props.register}/>
        </RadioGroup>
    );
}
