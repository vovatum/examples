import {Clock} from "./Clock";
import React from "react";

export default {
    title: 'DimychClockExample',
    component: Clock
}

export const DimychAnalogClockExample = () => {
    return <Clock mode={'analog'}/>
}

export const DimychDigitalClockExample = () => {
    return <Clock mode={'digital'}/>
}