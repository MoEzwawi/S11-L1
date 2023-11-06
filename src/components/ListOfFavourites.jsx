import { Container, Col, Row, Alert, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"



const ListOfFavourites = () => {
    const favs = useSelector(state => state.favourites.content)
    const dispatch = useDispatch()
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <h1 className="my-3">List of favourites</h1>
                </Col>
                <Col xs={4}>
                    <Link to={'/'}>
                        <div className="btn btn-info rounded-pill mt-3">Home</div>
                    </Link>
                </Col>
                {favs.length ? (
                    favs.map((fav, i) => {
                        return (
                            <Row className="align-items-center" key={i}>
                                <Col xs={7}>
                                    <Link to={`/${fav}`}><p>{fav}</p></Link>
                                </Col>
                                <Col xs={2}>
                                    <Button className="btn btn-danger rounded-pill mt-3" onClick={() => {
                                        dispatch({
                                            type: 'REMOVE_FROM_FAVS',
                                            payload: fav,
                                        })
                                    }}>Remove</Button>
                                </Col>
                            </Row>
                        )
                    })) : (
                    <Alert variant="danger">No company is present in your list of favourites</Alert>
                )}
            </Row>
        </Container>
    )
}

export default ListOfFavourites