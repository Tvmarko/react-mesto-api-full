const apiSettings = {
    baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

export { apiSettings };