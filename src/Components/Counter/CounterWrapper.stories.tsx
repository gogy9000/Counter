import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CounterWrapper} from "./CounterWrapper";



const DemoApp:React.FC = () =>  {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error,setError]=useState('')
    return (
        <CounterWrapper error={error} setError={setError}  maxValue={maxValue} startValue={startValue}
                                setStartValue={setStartValue} setMaxValue={setMaxValue} />
    )


}

export default {
    title: 'CounterWrapperStories',
    component: DemoApp,

} as ComponentMeta<typeof DemoApp>;

export const CounterWrapperStories: ComponentStory<typeof DemoApp> = () =><DemoApp/>

