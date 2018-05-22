import { connect } from 'react-redux';
import { decrementBy } from '../actions/counter';
import Button from '../components/Button2';

const mapDispatchToProps = {
    decrementBy
};

export default connect(null, mapDispatchToProps)(Button);
