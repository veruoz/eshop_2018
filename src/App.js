import {Component} from "react";
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import axios from "axios";
import Menu from "./components/Menu";
import BookCard from "./components/BookCard";
import {Card, Container} from 'semantic-ui-react'
import './App.css'


class App extends Component {
    componentWillMount() {
        const { setBooks } = this.props
        axios.get('/books.json').then(({ data }) => {
            setBooks(data)
        })
    }

    render() {
        const { books, isReady } = this.props

        return (
            <Container>
                <Menu/>
                <Card.Group itemsPerRow={4}>
                    {!isReady ? 'Загрузка' : books.map((book, i) => (
                        <BookCard key={i} {...book} />
                    ))}
                </Card.Group>

            </Container>
        );
    }
}

const mapStateToProps = ({ books }) => ({
    books:   books.items,
    isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
