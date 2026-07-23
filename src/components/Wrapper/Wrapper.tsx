import React from 'react';
import { MyApp } from '../MyApp';

interface WrapperState {
  toggle?: boolean;
}

export class Wrapper extends React.Component<object, WrapperState> {
  constructor(props: object) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          toggle
        </button>
        <div>{this.state.toggle ? <MyApp /> : null}</div>
      </>
    );
  }
}
