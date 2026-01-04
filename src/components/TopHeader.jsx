export default function TopHeader({name, username, avatorImage}){
    return(

        <header className="topHeader">
            <div className="topHeaderInner">
                <div className="avatorRing">
                    <div className="avatorCircle avatorImageWrapper" >
                        <img src={avatorImage} alt={name} className="avatorImage"/>
                    </div>
                </div>

                     <div className="topHeaderContent">
                        <h1 className="profileName">{name}</h1>
                        <p className="profileHandle">{username}</p>

                    <div className="topHeaderButtons">
                        <button className="btnHeader primary">Edit profile</button>
                        <button className="btnHeader ghost">Sign Out</button>
                    </div>
                            
                        </div>
            </div>
        </header>
        
    )}