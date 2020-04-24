import React from 'react';
import { connect } from 'react-redux';

const Notification = ({ notifications }) => {
  // const [visible, setVisible] = useState(true);
  // setTimeout(() => {
  //   setVisible(!visible);
  // }, 5000);

  // const notifications = useSelector((state) => state.notifications);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return (
    <div>
      {notifications.length > 0
        ? notifications.map((notification) => (
            <div style={style}>{notification}</div>
          ))
        : ''}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps)(Notification);
