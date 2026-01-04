export default function StatCard({title, bigValue, footerText}){
return(
    <div className="card statCard">
       <div className="statTop"></div>
       <p className="statTitle">{title}</p>
       {icon ? <span className="statIcon">{icon}</span> :null}  
       {bigValue ? <span className="statValue">{bigValue}</span> : null}
       <p className="statFooter">{footerText}</p>
      
    </div>
)
}