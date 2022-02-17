enum StatusCode {
  OK = 200,
  NO_CONTENT = 204,
  CREATED = 201,
  INERNAL_ERROR = 500,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  CONFLICT = 409,
};

export default StatusCode;