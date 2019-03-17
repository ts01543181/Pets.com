import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = state => ({
    session: state.session,
    boards: state.boards
});

const HomeContainer = connect(mapStateToProps, null)(Home);

export default HomeContainer;