import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CounterSettingsWrapper} from "./CounterSettingsWrapper";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const DemoApp:React.FC = () =>  {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error,setError]=useState('')
    return (
        <CounterSettingsWrapper error={error} setError={setError} maxValue={maxValue} startValue={startValue}
                          setStartValue={setStartValue} setMaxValue={setMaxValue} />
    )


}

export default {
    title: 'CounterSettingsWrapper',
    component: DemoApp,

} as ComponentMeta<typeof DemoApp>;

export const CounterSettingsWrapperStories: ComponentStory<typeof DemoApp> = () =><DemoApp/>




