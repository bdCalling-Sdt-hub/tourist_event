'use client'
import { Button } from '@/InterFaces/Props'
import React from 'react'

const ButtonBlue = ({
    classNames = '',
    icon = null,
    handler = null,
    text = 'button',
    styles = null
}: Button) => {
    return (
        <button
            onClick={() => { handler && handler() }}
            style={styles ? styles : {}}
            className={`button-blue ${classNames || ''}`}
        >
            {icon && icon} {text}
        </button>
    );
};

export default ButtonBlue;
