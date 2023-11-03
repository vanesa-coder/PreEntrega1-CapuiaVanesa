import { CardWidget } from "../CardWidget/CardWidget";
import styles from "/src/app.module.css";


export const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img className={styles.logo} src="/src/assets/img/cafe.png"/>
    <a className={styles.elbar} class="navbar-brand" href="#">El Bar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav navs ">
        <li class="nav-item ">
          <a class="nav-link links " aria-current="page" href="#">Desayuno/Merienda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">Almuerzo/Cena</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">Bebidas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#">Postres</a>
        </li>
      </ul>
    </div>
  </div>
  <CardWidget/>
</nav>
    
    </>
    
  )
}
