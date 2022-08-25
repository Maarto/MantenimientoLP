import { CgGhostCharacter } from 'react-icons/cg';


function ErrorPage(props) {

    let { error } = props

    let Details = ""

    switch(error){
        case 404:
            Details = "Esta página no se encuentra disponible o ha sido eliminada."
        break;
    }

    return (
        <div className="Error_Container">
            <div className="inner_cont">
                <CgGhostCharacter className='ErrorIcon'/>
                <h1>Oops!, ha ocurrido un <span className='lp'>error.</span></h1>
                <p className='detail_error'>{Details}</p>
            </div>
        </div>
    )

}


export default ErrorPage;