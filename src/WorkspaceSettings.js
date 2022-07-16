import { Unarchive } from '@mui/icons-material';
import { Button, TextField, Alert, AlertTitle, Avatar, RadioGroup, FormControlLabel, Radio, ListItemText, Menu, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ChromePicker } from 'react-color';
import { useState } from 'react';
import SizeSelector from './Components/SizeSelector';
import PrivacySelector from './Components/PrivacySelector';


function WorkspaceSettings(props) {    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.logo = props.logo;
        data.size = props.size;
        console.log(JSON.stringify(data, null, 2));
    };

    const handleDiscard = () => {
        props.setLogo(undefined);
        props.setName('');
        props.setURL('');
        props.setSize('Sólo yo');
        props.setColor('#39B0FF');
        props.setPrivacy('private');
        reset();
    };

    const requiredAlert = () => {
        return <Alert severity='error'>Se requiere este campo *</Alert>;
    };

    const handleChange = (statusSetter) => (event) => {
        statusSetter(event.target.value);
    };
    
    const handleUpload = (event) => {
        if (event.target.files.length > 0) {
            const uploadFile = URL.createObjectURL(event.target.files[0]);
            props.setLogo(uploadFile);            
        }
    }

    const [pickerAnchor, setPickerAnchor] = useState(null);
    const handlePickerClick = (event) => {
        setPickerAnchor(event.currentTarget);
    }
    const handlePickerClose = () => {
        setPickerAnchor(null);
    }
    const handlePickerChange = (color) => {
        props.setColor(color.hex);
    }

    return (
        <div className="workspace-settings-component">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Configuración</h1>

                {/** LOGO DEL ESPACIO */}
                <h2>Logo del espacio</h2>
                <div id="field-logo">
                    <Avatar src={props.logo ?? ''} sx={{backgroundColor: 'darkslategray'}}>B</Avatar>
                    <Button component="label" sx={{color: 'gray', marginLeft: '2vh', border: '1px solid #E4E4E4'}}>
                        <Unarchive htmlColor='gray' /> Subir logo 
                        <input type="file" hidden accept='.png, .jpg, .jpeg' {...register("logo")} onChange={handleUpload}/>
                    </Button>
                </div>
                <Alert severity='info' sx={{backgroundColor: '#FFF'}}>
                    <AlertTitle>Este logo identificará tu espacio entre el resto.</AlertTitle>
                    Preferiblemente sube una imagen .png igual o superior a 65px a 72 ppp con fondo transparente.
                </Alert>
                
                {/** NOMBRE DEL ESPACIO */}
                <h2>Nombre del espacio</h2>
                <TextField
                    id="field-name" 
                    label="Ep: Mi espacio de trabajo"
                    value={props.name}
                    {...register("name", {required: true})} 
                    onChange={handleChange(props.setName)} 
                    error={errors.name && true}
                />
                {errors.name && requiredAlert()}

                {/** URL DEL ESPACIO (DIRECCIÓN WEB) */}
                <h2>URL del espacio (dirección web)</h2>
                <TextField 
                    id="field-url" 
                    label={<div style={{display: 'flex', justifyContent: 'space-between', width: '75vh'}}>
                            <div>Ep: mi.dominio</div><div>.dofleini.com</div>
                    </div>} 
                    value={props.url}
                    {...register("url", {required: true})}
                    onChange={handleChange(props.setURL)}
                />

                <Alert severity='info' sx={{backgroundColor: '#FFF'}}>
                <AlertTitle>Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor no lo hagas muy seguido :) 
                </AlertTitle>
                Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro.
                </Alert>

                {/** ¿CUÁNTAS PERSONAS TRABAJARÁN CONTIGO, INCLUYÉNDOTE A TI */}
                <h2>¿Cuántas personas trabajarán contigo, incluyéndote a ti?</h2>
                <SizeSelector size={props.size} setSize={props.setSize}/>

                {/** COLOR DEL TEMA */}
                <h2>Color del tema</h2>
                {<RadioGroup id="field-color" defaultValue="#39B0FF" onChange={handleChange(props.setColor)} value={props.color}>
                    <FormControlLabel value="#39B0FF" control={<Radio sx={{color: 'transparent', backgroundColor: '#39B0FF'}}/>} {...register("color")}/>

                    <FormControlLabel value="#04B58B" control={<Radio sx={{color: 'transparent', backgroundColor: '#04B58B'}}/>} {...register("color")}/>

                    <FormControlLabel value="#3E9C4B" control={<Radio sx={{color: 'transparent', backgroundColor: '#3E9C4B'}}/>} {...register("color")}/>

                    <FormControlLabel value="#B6BC00" control={<Radio sx={{color: 'transparent', backgroundColor: '#B6BC00'}}/>} {...register("color")}/>

                    <FormControlLabel value="#E59100" control={<Radio sx={{color: 'transparent', backgroundColor: '#E59100'}}/>} {...register("color")}/>

                    <FormControlLabel value="#E55C00" control={<Radio sx={{color: 'transparent', backgroundColor: '#E55C00'}}/>} {...register("color")}/>

                    <FormControlLabel value="#EE1F50" control={<Radio sx={{color: 'transparent', backgroundColor: '#EE1F50'}}/>} {...register("color")}/>

                    <FormControlLabel value="#D6198A" control={<Radio sx={{color: 'transparent', backgroundColor: '#D6198A'}}/>} {...register("color")}/>

                    <FormControlLabel value="#B321F1" control={<Radio sx={{color: 'transparent', backgroundColor: '#B321F1'}}/>} {...register("color")}/>

                    <div>
                    <FormControlLabel value={props.color} control={<Radio sx={{
                        backgroundColor: props.color}} onClick={handlePickerClick}/>} {...register("color")}/>
                    <Menu anchor={pickerAnchor} open={Boolean(pickerAnchor)}>
                        <MenuItem onBlur={handlePickerClose}>
                            <ChromePicker disableAlpha={true} color={props.color} onChange={handlePickerChange}/>
                        </MenuItem>
                    </Menu>
                    </div>
                </RadioGroup>}

                {/** PRIVACIDAD DEL ESPACIO*/}
                <h2>Privacidad del espacio</h2>
                <PrivacySelector privacy={props.privacy} setPrivacy={props.setPrivacy} register={register}/>

                
                {/** CONTROL DEL FORMULARIO */}
                <section className='form-section-controls'>
                    <Button variant="contained" type='submit' sx={{backgroundColor: "#48B5FE"}} >Guardar cambios</Button>
                    <Button variant="outlined" onClick={handleDiscard}>Descartar</Button>
                </section>
            </form>
        </div>
    );
}

export default WorkspaceSettings;