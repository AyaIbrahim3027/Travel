import '../styles/Menu.css'
function MenuItem(propes){
    return(
        <div className='menuItem'>
            <div style ={{backgroundImage:`url(${propes.image})`}}/>
        </div>
    )
}
export default MenuItem