import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Deck from './Deck.layout';
import { likeName } from '../../stores/names/actions';

const mapStateToProps = (state) => {
    return {
        names: state.names,
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        likeName,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck)
