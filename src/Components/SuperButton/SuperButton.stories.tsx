import {ComponentStory, ComponentMeta} from '@storybook/react';
import SuperButton from "./SuperButton";
import React from "react";
import s from "../../App.module.css";
import {action} from "@storybook/addon-actions";

export default {
    title:'SuperButton',
    component: SuperButton,
    parameters: {
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
    },
    argTypes: {
        backgroundColor: { control: 'color'}
    },

} as ComponentMeta<typeof SuperButton>;

const Template: ComponentStory<typeof SuperButton> = (args) => <SuperButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    disabled:false,

    children:'button'
};
export const Red = Template.bind({});
Red.args = {
    disabled:false,
    red:true,
    children:'button',

};