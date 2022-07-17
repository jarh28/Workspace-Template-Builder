import { Avatar, Button } from '@mui/material';
import { Unarchive } from '@mui/icons-material'


function WorkspaceIcon({ logo }) {
    return (
        <Avatar 
        src={logo ?? ''} 
        sx={{
            backgroundColor: 'darkslategray'
        }}>
            <strong>B</strong>
        </Avatar>
    );
}

export default function IconLoader(props) {
    const handleUpload = (event) => {
        if (event.target.files.length > 0) {
            const uploadFile = URL.createObjectURL(event.target.files[0]);
            props.setLogo(uploadFile);            
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "2vh"
        }}>
            <WorkspaceIcon logo={props.logo} />
            <Button 
            component="label" 
            sx={{
                color: 'gray', 
                marginLeft: '2vh', 
                border: '1px solid #E4E4E4'
            }}>
                <Unarchive htmlColor='gray' /> 
                Subir logo 
                <input 
                type="file" 
                hidden 
                accept='.png, .jpg, .jpeg' 
                {...props.register("logo")} 
                onChange={handleUpload}/>
        </Button>
        </div>    
    );
}
