const apiSettings = {
    baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

export { apiSettings };