
const AddTraceId = (req, res, next) => {
  req.headers['traceId'] = 'v41010101100';
  console.log(req.headers);
  next();
}

export default AddTraceId;