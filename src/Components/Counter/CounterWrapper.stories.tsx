import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CounterWrapper} from "./CounterWrapper";



const DemoApp:React.FC = () =>  {

    const [error,setError]=useState('')
    return (
        <CounterWrapper error={error}/>
    )


}

export default {
    title: 'CounterWrapperStories',
    component: DemoApp,

} as ComponentMeta<typeof DemoApp>;

export const CounterWrapperStories: ComponentStory<typeof DemoApp> = () =><DemoApp/>

