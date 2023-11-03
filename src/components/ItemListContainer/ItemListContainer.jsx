


export const ItemListContainer = ({bienvenida, presentacion}) => {
  return (
    <div className="presentacion">
        <h1> {bienvenida} </h1>
        <h2 className="elBar">El Bar</h2>
        <img src="/src/assets/img/cafe.png"/>
        <h3> {presentacion} </h3>
    </div>
  )
}
