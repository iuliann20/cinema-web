function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action) // eslint-disable-line no-console
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState()) // eslint-disable-line no-console
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
  
  export default logger;
  