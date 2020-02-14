# para-modal

![npm version](https://img.shields.io/npm/v/para-modal)


## Installation & Usage

```sh
npm install para-modal --save
```
### inside index.html
```html
<div id="modal"></div>
```

### Include the Component

```js
import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'para-modal';

class Component extends React.Component {

  render() {
    return <Modal close={() => { console.log('pass a prop of however you want to close the modal')}} />
  }
}
```