import * as React  from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

/**
 * note: we are specifie that Hello class component has Props typechecking for
 * her props and an empty object to state typechecking too
 */
export default class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel=1} = this.props;
    if (enthusiasmLevel <= 0) throw new Error("You must be enthusiasl");
    return (
      <div>
        Azul a {name + getEnthutiasem(enthusiasmLevel)}
      </div>  
    )
  }
}
/* Function Component
export default function Hello({ name, enthusiasmLevel=1 }:Props) {
  if (enthusiasmLevel<=0) throw new Error("You must be enthusiasl");
  return (
    <div>
      Azul a {name + getEnthutiasem(enthusiasmLevel)}
    </div>
  )
}
*/

function getEnthutiasem(nbrEnt:number) {
  return Array(nbrEnt+1).join('!');
}