import React from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';

import './WordButtons.less';

export default class WordButtons extends React.Component {
    render() {
        const {
            onInputClear,
            onHelp,
            onGenerate,
            onWordModalOpen,
            onAboutModalOpen
        } = this.props;

        return (
            <div className='WordButtons'>
                <ButtonToolbar className='buttons'>
                    <Button
                        className = 'generateButton'
                        bsStyle   = 'primary'
                        onClick   = {onGenerate}>
                            New
                    </Button>

                    <Button
                        className = 'clearButton'
                        bsStyle   = 'primary'
                        onClick   = {onInputClear}>
                            Clear
                    </Button>

                    <Button
                        className = 'helpButton'
                        bsStyle   = 'primary'
                        onClick   = {onHelp}>
                            Help
                    </Button>

                    <Button
                        className = 'customButton'
                        bsStyle   = 'primary'
                        onClick   = {onWordModalOpen}>
                            Custom
                    </Button>

                    <Button
                        className = 'aboutButton'
                        bsStyle   = 'primary'
                        onClick   = {onAboutModalOpen}>
                            About
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
