
const AddTraceId = (req, res, next) => {
  req.headers['traceId'] = 'v41010101100';
  next();
}

export default AddTraceId;