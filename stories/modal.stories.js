import React from 'react';
import {storiesOf} from '@storybook/react';

import Modal from '../src/components/Modal';

// const icon = (props) => (
//     <div style={{padding: '15px 5px'}}>
//         <Icon {...props}/> {props.type}
//     </div>
// );
//
// const icons = () => Object
//     .keys(Icon.Type)
//     .map((key) => icon({type: Icon.Type[key]}))
// ;

storiesOf('Modal', module)
    .add('Plain', () => [
        <Modal active > </Modal>
    ])

;
