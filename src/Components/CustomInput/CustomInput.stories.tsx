import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CustomInput} from "./CustomInput";
import styles from "../../App.module.css";
import React from "react";

export default {
    title: 'CustomInputStories',
    component:CustomInput
} as ComponentMeta< typeof CustomInput>

export const CustomInputStories:ComponentStory<typeof CustomInput> = () =>

    <CustomInput   className={styles.startValueInput}/>
