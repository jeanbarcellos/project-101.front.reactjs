import React from 'react'
import { injectReducer } from 'app/store'

const withReducer = (key, reducer) => WrappedComponent => {
  injectReducer(key, reducer)

  return props => <WrappedComponent {...props} />
}

export default withReducer
