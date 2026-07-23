import React from 'react';
import { getPersonaById } from '../../api/getPersonaById';
import { getStarshipById } from '../../api/getStarshipByid';

interface MyAppState {
  count: number;
  name: string;
  starshipName: string;
}
// smart components
// class components
// stateful components
// react version < 18
// mount
// update
// unmount
export class MyApp extends React.Component<object, MyAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      starshipName: '',
    };
  }


  handleStarshipSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    getStarshipById(id).then((data) => {
      this.setState({
        starshipName: data?.name ?? '',
      });
    });
  };

  // este metodo se ejecuta
  // cuando el componente ya se monto
  componentDidMount(): void {
    
    console.log('did mount');
    this.setState({ count: this.state.count + 1 });
    
    getPersonaById('1').then((data) => {
      console.log('Myapp:didmount', data);
      this.setState({
        name: data?.name ?? '',
      });
    });

    
    //Sin evento 
    // getStarshipById('2').then((data) => {
    //   this.setState({
    //     starshipName: data?.name ?? '',
    //   });
    // });

  }

  /*
  UNSAFE_componentWillMount(): void {
    console.log('will mount');
  }
  */

  componentDidUpdate() {
    // async y await
    // imperativa
    console.log('did update');
    console.log('termino el metodo de ejecutarse');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    return (
      <>
        <div>{this.state.name}</div>
        <div>{this.state.starshipName}</div>
        <div>{'hello world legacy: count: ' + this.state.count}</div>
        <input type="text" placeholder="Ingresa ID" onChange={this.handleStarshipSearch} />
        <div>{this.state.starshipName ? `You Starship: ${this.state.starshipName}` : ''}</div>
      </>
    );
  }
}
