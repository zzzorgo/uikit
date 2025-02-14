import React from 'react';

import type {Meta, StoryFn} from '@storybook/react';

import {Skeleton} from '../Skeleton';
import type {SkeletonProps} from '../Skeleton';

import {SkeletonShowcase} from './SkeletonShowcase';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
} as Meta;

const DefaultTemplate: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;
export const Default = DefaultTemplate.bind({});

const ShowcaseTemplate: StoryFn = () => <SkeletonShowcase />;
export const Showcase = ShowcaseTemplate.bind({});
