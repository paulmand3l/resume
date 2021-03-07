import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import './index.css';
import Resume from './Resume';

import data from './data'

ReactDOM.render(
  <PDFViewer width="100%" height="100%">
    <Resume {...data} />
  </PDFViewer>,
  document.getElementById('root')
);
