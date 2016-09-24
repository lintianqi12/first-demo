import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Routers from './routers';

import 'highlight.js/styles/github-gist.css';
import './post.css';

render(<Routers />,document.getElementById('root'));
