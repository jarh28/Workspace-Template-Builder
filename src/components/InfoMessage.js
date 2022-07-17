import { InfoOutlined } from '@mui/icons-material';
import { Alert } from '@mui/material'


export default function InfoMessage(props) {
    return (
        <Alert 
        severity='info'
        icon={
            <InfoOutlined
            sx={{
                transform: "rotate(180deg)",
                color: "#7F7F7F"
            }}></InfoOutlined>
        }
        sx={{
            color: "#7F7F7F",
            backgroundColor: '#FFF'
        }}>
            <div
            style={{
                marginBottom: "2vh"
            }}>{props.title}</div>
            <div>{props.description}</div>
        </Alert>
    );
}
