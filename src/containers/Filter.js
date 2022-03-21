import {bindActionCreators} from "redux";
import * as filterActions from "../actions/filter";
import {connect} from "react-redux";
import Filter from "../components/Filter";

const mapStateToProps = ({ books }) => ({
    filterBy: books.filterBy
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
