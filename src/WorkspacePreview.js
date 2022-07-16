import { Avatar, Chip } from "@mui/material";
import { ArrowBack, ArrowForward, Refresh, Https, Close, Add, StarRounded } from '@mui/icons-material';

function WorkspacePreview({ logo, name, url, size, color, privacy }) {
    const data = [
        {'primary': [0.35, 0.35, 0.10], 'secondary': [0.5]},
        {'primary': [0.10, 0.40, 0.05, 0.30], 'secondary': [0.2, 0.5]},
        {'primary': [0.35, 0.35, 0.10], 'secondary': [0.5]},
        {'primary': [0.33, 0.33, 0.10, 0.05], 'secondary': [0.5, 0.2]},
        {'primary': [0.05, 0.10, 0.33, 0.33], 'secondary': [0.65]},
        {'primary': [0.35, 0.35, 0.10], 'secondary': [0.4, 0.1, 0.2]},
    ];

    const getListItem = (data, id) => {
        let {primary, secondary} = data;
        primary = primary.map(x => Math.floor(45 * x).toString() + 'vh');
        secondary = secondary.map(x => Math.floor(40 * x).toString() + 'vh');
        
        const colorItemMini = id === 2 ? color : '#E2E3E5';
        const itemStyles = id === 2 ? {borderLeft: `2px solid ${color}`} : {};
        const itemBackColor = id === 2 ? (
            <span style={{
                position: 'fixed',
                backgroundColor: color,
                height: 'inherit',
                width: 'inherit',
                opacity: 0.4
            }}></span>
        ) : <></>

        return (
            <li id={id} className="browser-main-item" style={itemStyles}>
                {itemBackColor}
                <span>
                   {primary.map((x, i) => <span className="browser-main-item-mini" style={{width: x, backgroundColor: colorItemMini}}></span>)}
                </span>
                <span className="browser-main-secondary-item">
                    {secondary.map((x, i) => <span className="browser-main-item-mini" style={{width: x, backgroundColor: colorItemMini}}></span>)}
                </span>
            </li>
        );
    }

    return (
        <div className="workspace-preview-component">
            <header>
                <section className="browser-tab-bar">
                    <div className="browser-tab">
                        <span>Plankton - {name || 'Mi espacio'}</span>
                        <Close />
                    </div>
                    <Add sx={{paddingTop: '10px', paddingLeft: '1vh'}}/>
                </section>
                <section className="browser-menu">
                    <ArrowBack/>
                    <ArrowForward color='disabled' sx={{marginLeft: '1vh'}}/>
                    <Refresh sx={{marginLeft: '1vh'}}/>
                    <Chip label={
                        <div className="browser-menu-url">
                            <Https fontSize='' htmlColor="#388e3c"/>
                            <span>
                                <span style={{color: "#388e3c"}}>
                                    Secure | https://
                                </span>
                                <span>
                                    {url || ''}{(name && url) ? "/proyectos/" + name.toLowerCase().replace(/\s/g, '_') : ''}
                                </span>
                            </span>
                        </div>
                    } sx={{
                        width: '100%', display: 'flex', justifyContent: 'start', borderTopRightRadius: '0', borderBottomRightRadius: '0', borderColor: '#196FC1', borderStyle: 'solid', borderWidth: '1px', borderRightWidth: '0', marginLeft: '1vh'
                    }}></Chip>
                </section>
            </header>

            <main className="browser-workspace-template">
                <section className="browser-main-content">
                    <header>
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <span id="browser-main-search"></span>
                            <StarRounded fontSize="large" htmlColor="#FFC60A"/>
                        </span>
                        <span id="browser-main-login" style={{backgroundColor: color}}></span>
                    </header>
                    <main>
                        <span id="browser-main-title"></span>
                        <ul className="browser-main-list">
                            {data.map((getListItem))}
                        </ul>
                    </main>
                </section>
                <aside className="browser-aside-menu">
                    <Avatar src={logo ?? ''} sx={{backgroundColor: 'darkslategray'}}>B</Avatar>
                    {Array(5).fill(<span></span>).map((_, i) => {
                        return i === 1 ? <span style={{backgroundColor: color}}></span>: <span style={{backgroundColor: '#CFD0D2'}}></span>;
                    })}
                </aside>
            </main>
        </div>
    );
}

export default WorkspacePreview;