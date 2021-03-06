import { Avatar, Chip } from "@mui/material";
import { ArrowBack, ArrowForward, Refresh, Https, Close, Add, StarRounded, TagFaces, Public, Lock } from '@mui/icons-material';


// TODO: Refactor this component into smaller ones. Then separates files at 'components' folder in two subfolders called: Settings and Preview.
export default function WorkspacePreview({ logo, name, url, size, color, privacy }) {
    const data = [
        {'primary': [0.35, 0.35, 0.10], 'secondary': [0.5]},
        {'primary': [0.10, 0.40, 0.05, 0.30], 'secondary': [0.2, 0.5]},
        {'primary': [0.35, 0.35, 0.10], 'secondary': [0.5]},
        {'primary': [0.33, 0.33, 0.10, 0.05], 'secondary': [0.5, 0.2]},
        {'primary': [0.05, 0.10, 0.33, 0.33], 'secondary': [0.65]},
        {'primary': [0.35, 0.35, 0.10], 'secondary': [0.4, 0.1, 0.2]},
    ];

    const onlyOne = size === 'Sólo yo';
    const highlightedItem = onlyOne ? [1] : [2, 5];
    const getListItem = (data, id) => {
        let {primary, secondary} = data;
        primary = primary.map(x => Math.floor(270 * x).toString() + 'px');
        secondary = secondary.map(x => Math.floor(170 * x).toString() + 'px');
        
        const colorItemMini = highlightedItem.includes(id) ? color : '#E2E3E5';
        const itemStyles = highlightedItem.includes(id) ? {borderLeft: `2px solid ${color}`} : {};
        const itemBackColor = highlightedItem.includes(id) ? (
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
                                    {url || 'mi.dominio.dofleini.com'}
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
                        <div style={{
                            display: "flex", 
                            justifyContent: "space-between",
                            alignItems: 'center',
                            paddingRight: "5vh",
                            paddingLeft: "2vh"
                        }}>
                            <span id="browser-main-title"></span>
                            <div>
                                <Chip icon={<TagFaces />} label={size} size='small' sx={{marginRight: "2vh"}} />
                                <Chip icon={privacy === 'private' ? <Lock /> : <Public />} label={privacy === 'private' ? "Privado" : "Público"} size='small' />
                            </div>
                        </div>
                        <ul className="browser-main-list">
                            {onlyOne ? data.slice(0, 3).map((getListItem)): data.map((getListItem))}
                        </ul>
                    </main>
                </section>
                <aside className="browser-aside-menu">
                    <Avatar src={logo ?? ''} sx={{backgroundColor: 'darkslategray'}}>B</Avatar>
                    {Array((onlyOne ? 2 : 4)).fill(<span></span>).map((_, i) => {
                        return i === (onlyOne ? 0 : 1) ? <span style={{backgroundColor: color}}></span>: <span style={{backgroundColor: '#CFD0D2'}}></span>;
                    })}
                </aside>
            </main>
        </div>
    );
}
