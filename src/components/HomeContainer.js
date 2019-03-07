import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = state => ({
    session: state.session
});

const HomeContainer = connect(mapStateToProps, null)(Home);

export default HomeContainer;