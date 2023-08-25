import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    return (
      <div className=''>
          <h1 className=''>APP - MENU </h1>
          <p className=''>Ocurrio un error</p>
          <p className=''>{error.statusText || error.message }</p>
          <Link to="/" >Go back to home page</Link>
      </div>
    )
}
