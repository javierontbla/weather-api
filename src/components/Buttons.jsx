import React, { Fragment } from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'

import './Buttons.css'
import usa from './usa.png'
import china from './china.png'
import germany from './germany.png'
import india from './india.png'
import mexico from './mexico.png'

const Buttons = ({ newYork, beijing, mumbai, mexicoCity, deutschland }) => {
    return (
        <Fragment>
            <div className="container">
                <Button as='div' labelPosition='left' onClick={() => newYork()} >
                    <Label as='a' basic className="lbl">
                        New York
                    </Label>
                    <Button icon className="btn-color">
                        <img src={usa} height="18" width="18"/>
                    </Button>
                </Button>
                <Button as='div' labelPosition='left' className="chinaBtn">
                    <Label as='a' basic onClick={() => beijing()} className="lbl">
                        Beijing 
                    </Label>
                    <Button icon className="btn-color">
                        <img src={china} height="18" width="18"/>
                    </Button>
                </Button>
                <Button as='div' labelPosition='left' className="indiaBtn">
                    <Label as='a' basic onClick={() => mumbai()} className="lbl">
                        Mumbai
                    </Label>
                    <Button icon className="btn-color">
                        <img src={india} height="18" width="18"/>
                    </Button>
                </Button>
                <Button as='div' labelPosition='left' className="mexBtn">
                    <Label as='a' basic onClick={() => mexicoCity()} className="lbl">
                        Mexico City
                    </Label>
                    <Button icon className="btn-color">
                        <img src={mexico} height="18" width="18"/>
                    </Button>
                </Button>
                <Button as='div' labelPosition='left' className="germBtn">
                    <Label as='a' basic onClick={() => deutschland()} className="lbl">
                        Berlin
                    </Label>
                    <Button icon className="btn-color">
                        <img src={germany} height="18" width="18"/>
                    </Button>
                </Button>
            </div>
        </Fragment>
    )
}

export default Buttons