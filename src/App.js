import {Component} from "react";
import {connect} from "react-redux";


class App extends Component {
    render() {
        const { books } = this.props.books
        return (
            <div className="container">
                <h1>{books[0].title}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(App);
