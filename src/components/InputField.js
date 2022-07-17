import { TextField, Alert } from "@mui/material";


export default function InputField({ id, label, value, setValue, register, required=true, pattern={}, errors }) {
    const handleChange = (statusSetter) => (event) => {
        statusSetter(event.target.value);
    };
    
    const handleAlert = (error) => {
        if (error) {
            return <Alert severity="error">{error.message}</Alert>;
        } else {
            return value && <Alert>Todo correcto !</Alert>;
        }
    }

    return (
        <>
            <TextField
            label={label}
            value={value}
            {...register(id, {required: required, pattern: pattern})} 
            onChange={handleChange(setValue)} 
            error={errors[id]} />
            {handleAlert(errors[id])} 
        </>
    );
}
