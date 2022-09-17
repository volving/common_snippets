import React, { useState, useEffect, useRef } from 'react';

export default function useWatch(value, callback) {
    const bow = useRef(value);
    const flag = useRef(true);

    useEffect(() => {
        if (flag.current) {
            flag.current = false;
        } else {
            // bow.current: the value before update
            // value: current value
            if(bow.current !== value) {
                callback(bow.current, value);
                bow.current = value;
            }
        }
    }, [value])
}
