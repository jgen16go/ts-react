import * as React from 'react'

type Props = {
  a: string
}

export const App = (props: Props) => {
  console.log(props)
  return <h1>{props.a}</h1>
}
