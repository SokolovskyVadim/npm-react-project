import React from 'react';

import CardWithPropTypes from './CardWithPropTypes';

export default {
  component: CardWithPropTypes,
  title: 'CardWithPropTypes',
};

const Template = (args) => <CardWithPropTypes {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cardName: "string",
  cardText: "string",
};