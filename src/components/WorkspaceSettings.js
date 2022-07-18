import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import SizeSelector from './SizeSelector';
import PrivacySelector from './PrivacySelector';
import ColorSelector from './ColorSelector';
import InfoMessage from './InfoMessage';
import IconLoader from './IconLoader';
import InputField from './InputField';


export default function WorkspaceSettings(props) {    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.logo = props.logo;
        data.size = props.size;
        alert(JSON.stringify(data, null, 2));
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

    return (
        <div className="workspace-settings-component">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Configuración</h1>

                {/** LOGO DEL ESPACIO */}
                <h2>Logo del espacio</h2>
                <IconLoader 
                logo={props.logo} 
                setLogo={props.setLogo} 
                register={register} />
                <InfoMessage 
                title={"Este logo identificará tu espacio entre el resto."}
                description={"Preferiblemente sube una imagen .png igual o superior a 65px a 72 ppp con fondo transparente."} />
                
                {/** NOMBRE DEL ESPACIO */}
                <h2>Nombre del espacio</h2>
                <InputField
                id="name"
                label="Ep. Mi espacio de trabajo" 
                value={props.name} 
                setValue={props.setName} 
                register={register}
                required="Debes ponerle un nombre a tu espacio de trabajo."  
                errors={errors} />

                {/** URL DEL ESPACIO (DIRECCIÓN WEB) */}
                <h2>URL del espacio (dirección web)</h2>
                <InputField
                id="url"
                label="Ep: mi.dominio.dofleini.com"
                value={props.url} 
                setValue={props.setURL} 
                register={register}
                required="Tu espacio de trabajo debe tener una dirección web."
                pattern={{value: /(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g, message: "Parece que tu URL no es válida :("}} 
                errors={errors} />

                <InfoMessage 
                title="Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor no lo hagas muy seguido :)"
                description="Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro."/>

                {/** ¿CUÁNTAS PERSONAS TRABAJARÁN CONTIGO, INCLUYÉNDOTE A TI */}
                <h2>
                    ¿Cuántas personas trabajarán contigo, incluyéndote a ti?
                </h2>
                <SizeSelector 
                size={props.size} 
                setSize={props.setSize}
                />

                {/** COLOR DEL TEMA */}
                <h2>
                    Color del tema
                </h2>        
                <ColorSelector 
                color={props.color} 
                setColor={props.setColor} 
                register={register} />

                {/** PRIVACIDAD DEL ESPACIO*/}
                <h2>
                    Privacidad del espacio
                </h2>
                <PrivacySelector 
                privacy={props.privacy} 
                setPrivacy={props.setPrivacy} 
                register={register} />

                
                {/** CONTROL DEL FORMULARIO */}
                <section className='form-section-controls'>
                    <Button 
                    variant="contained" 
                    type='submit' 
                    sx={{
                        textTransform: 'initial',
                        "&:hover": {
                            backgroundColor: "#48B5FE",
                        }
                    }}>Guardar cambios</Button>
                    <Button 
                    variant="outlined" 
                    onClick={handleDiscard}
                    sx={{
                        textTransform: 'initial'
                    }}>Descartar</Button>
                </section>
            </form>
        </div>
    );
}
