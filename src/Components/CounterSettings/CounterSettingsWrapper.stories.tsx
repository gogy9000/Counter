import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CounterSettingsWrapper} from "./CounterSettingsWrapper";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const DemoApp:React.FC = () =>  {


    const [error,setError]=useState('')
    return (
        <CounterSettingsWrapper  setError={setError}/>
    )


}

export default {
    title: 'CounterSettingsWrapper',
    component: DemoApp,

} as ComponentMeta<typeof DemoApp>;

export const CounterSettingsWrapperStories: ComponentStory<typeof DemoApp> = () =><DemoApp/>




