# react-bootstrap-pagination

Bootstrap styled pagination react component

## Usage

```javascript

import ReactDOM from 'react-dom';
import React from 'react';
import {PaginationSurface} from 'react-bootstrap-pagination';

var elem = document.getElementById('container');
ReactDOM.render(React.createElement(PaginationSurface,
{
    currPage: 1,
    numPages: 15,
    onChangePage: (page) => { console.log('Page changed', page)}

}), elem);
```