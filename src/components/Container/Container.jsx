import PropTypes from 'prop-types';
import css from './Container.module.css';

const Container = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
