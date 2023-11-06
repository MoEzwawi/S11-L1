import { Container, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"



const ListOfFavourites = () => {
    const favs = useSelector()
    console.log(favs)
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae soluta ullam nisi quisquam eius ab quibusdam sapiente ad. Dicta ipsum unde itaque reiciendis placeat nulla laborum aliquam est error.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus non dolore quaerat itaque tempore cumque, earum accusamus quia consectetur quibusdam vitae excepturi pariatur. A, dolores. Sint suscipit officia cum quam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem corrupti eos enim. Consequatur amet nobis nisi perferendis neque numquam veniam sequi illo, ea quaerat, id, ratione repellat qui sint.
            </p>
        </div>
    )
}

export default ListOfFavourites