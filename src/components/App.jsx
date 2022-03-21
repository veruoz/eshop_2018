import {Component} from "react";
import axios from "axios";
import Menu from "./Menu";
import BookCard from "./BookCard";
import {Card, Container} from 'semantic-ui-react'
import '../App.css'
import Filter from "../containers/Filter";


class App extends Component {
    // эту часть мы не можем убрать в контейнер, поскольку метод является частью классового компонента.
    // Но при функциональном подходе это возможно через хуки
    componentWillMount() {
        const { setBooks } = this.props
        axios.get('/books.json').then(({ data }) => {
            setBooks(data)
        })
    }

    render() {
        const { books, isReady, setFilter } = this.props

        return (
            <Container>
                <Menu/>
                <Filter setFilter={setFilter} />
                <Card.Group itemsPerRow={4}>
                    {!isReady ? 'Загрузка' : books.map((book, i) => (
                        <BookCard key={i} {...book} />
                    ))}
                </Card.Group>

            </Container>
        );
    }
}

export default App;
