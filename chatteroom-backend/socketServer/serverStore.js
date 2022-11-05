const connectUsers = new Map();

let io = null;
const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
}

const getSocketServerInstance = () => {
  return io
}

const addNewConnectedUser = ({ socketId, userId }) => {
  connectUsers.set(socketId, { userId });
  console.log('new connected user');
  console.log(connectUsers)
}

const removeConnectedUser = (socketId) => {
  if (connectUsers.has(socketId)) {
    connectUsers.delete(socketId);
  }
  console.log('user disconnected');
  console.log(connectUsers)
}

const getActiveConnections = (userId) => {
  const activeConnections = [];

  connectUsers.forEach(function (value, key) {
    if (value.userId === userId) {
      activeConnections.push(key)
    }
  })
  return activeConnections
}

const getOnlineUsers = () => {
  const onlineUsers = [];
  connectUsers.forEach((value, key) => {
    onlineUsers.push({ socketId: key, userId: value.userId })
  })

  return onlineUsers
}

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers

}