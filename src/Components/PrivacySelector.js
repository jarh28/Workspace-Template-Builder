import { FormControlLabel, RadioGroup, Radio, ListItemText } from "@mui/material";

function RadioButton({ label, value, description, register, privacy }) {
    const checked = value === privacy; 
    
    const componentColor = '#48B5FE';
    const styles = {
        width: '48%',
        alignItems: 'start'
    }

    if (checked) {
        styles.borderStyle = 'solid';
        styles.borderWidth ='1px';
        styles.borderColor = componentColor;
        styles.borderRadius ='5px';
        styles.marginBottom ='2vh';
        styles.color = componentColor;
    }

    return (
        <FormControlLabel 
        sx={styles}
        control={<Radio sx={{
            color: componentColor,
            "&.Mui-checked": {
                color: componentColor
            }
        }}/>} 
        value={value}
        label={
            <ListItemText primary={label} secondary={description}></ListItemText>
        }
        {...register("privacy")}
        />
    );
}

export default function PrivacySelector(props) {
    const values = [
        ["Privado", "private", "Cualquiera con el vínculo podrá ver la actividad de tu Organización"], 
        ["Público", "public", "Cualquiera con el vínculo podrá ver la actividad de tu Organización"]
    ];
    
    const handleChange = (event) => {
        props.setPrivacy(event.target.value);
    }
    
    return (
        <RadioGroup 
            defaultValue="private" 
            value={props.privacy} 
            onChange={handleChange}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
            {values.map((data, idx) => (
                <RadioButton key={idx} label={data[0]} value={data[1]} description={data[2]} register={props.register} privacy={props.privacy}/>
            ))}
        </RadioGroup>
    );
}