import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"
const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Pagina no encontrada.</p>
        <p class="lead">
          La pagina que deseas visualizar no existe.
        </p>
        <Link to={"/"} class="btn btn-primary">Regresar a Inicio</Link>
      </div>
    </div>
  );
}
export default Error;