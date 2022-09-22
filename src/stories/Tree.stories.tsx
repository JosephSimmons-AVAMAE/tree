// Tree.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tree from '../index';
import "rc-tree/assets/index.css";
import "./assets/StorybookTree.css";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tree',
  component: Tree,
} as ComponentMeta<typeof Tree>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tree> = (args) => <Tree {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  treeData: [{"key":"0-0","title":"Configuration","icon":"f","children":[{"key":"0-0-0","title":"SQ_OMS","icon":"c","isLeaf":true},{"key":"0-0-1","title":"SQ_OPTIMIZATION","icon":"c","isLeaf":true},{"key":"0-0-2","title":"SQ_OPTIMIZER","icon":"c","isLeaf":true},{"key":"0-0-3","title":"SQ_ORDER_MANAGEMENT","icon":"c","isLeaf":true},{"key":"0-0-4","title":"SQ_UI_MASTER_COLUMNS","icon":"c","isLeaf":true},{"key":"0-0-5","title":"SQ_UI_MASTER_NAME","icon":"c","isLeaf":true},{"key":"0-0-6","title":"SQ_UI_MASTER_PRICE","icon":"c","isLeaf":true},{"key":"0-0-7","title":"SQ_UI_MASTER_TOLTIP","icon":"c","isLeaf":true}]}],
  prefixCls: 'rc-tree',
  showLine: true,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: [],
  allowDrop: () => true,
  expandAction: "click",
};