import PropTypes from 'prop-types';
import { Notice } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Notice>{message}</Notice>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}