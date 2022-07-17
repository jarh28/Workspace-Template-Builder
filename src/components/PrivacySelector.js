import { FormControlLabel, RadioGroup, Radio, ListItemText } from "@mui/material";


function RadioButton({ label, value, description, register, privacy }) {
    const checked = value === privacy; 
    
    const componentColor = checked ? '#48B5FE' : "#CFD0D2";
    const styles = {
        width: '48%',
        alignItems: 'start',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: "#E4E4E4",
        borderRadius: '5px',
        marginBottom: '2vh'
    }

    if (checked) {
        styles.borderColor = componentColor;
        styles.color = componentColor;
    }

    return (
        <FormControlLabel 
        sx={styles}
        control={
            <Radio sx={{
                color: componentColor,
                "&.Mui-checked": {
                    color: componentColor
                }
            }} />
        } 
        value={value}
        label={
            <ListItemText 
            primary={label} 
            secondary={description}></ListItemText>
        }
        {...register("privacy")}
        />
    );
}

export default function PrivacySelector(props) {
    const values = [
        {
            label: "Privado", 
            value: "private", 
            description: "El contenido será visible sólo para ti y los miembros de tu Organización"
        }, 
        {
            label: "Público", 
            value: "public", 
            description: "Cualquiera con el vínculo podrá ver la actividad de tu Organización"
        }
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
                <RadioButton 
                key={idx} 
                label={data.label} 
                value={data.value} 
                description={data.description} 
                register={props.register} 
                privacy={props.privacy} />
            ))}
        </RadioGroup>
    );
}
