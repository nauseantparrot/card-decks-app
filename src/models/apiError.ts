interface HttpStatusInterface {
  status?: number;
}

class ApiError extends Error implements HttpStatusInterface {
  status?: number;

  constructor(message: string) {
    super(message);
  }
}

export default ApiError;
