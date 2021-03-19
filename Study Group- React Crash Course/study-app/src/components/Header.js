import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header>
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color='green' text='Hello' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS Styling
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header