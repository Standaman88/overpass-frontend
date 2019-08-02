import React from 'react'
import styled from 'styled-components'


import IconAnalytics from '/images/analytics.svg'
import IconBilling from '/images/billing.svg'
import IconCalling from '/images/calling.svg'
import IconInternational from '/images/international.svg'
import IconOutcomes from '/images/outcomes.svg'
import IconPayments from '/images/payments.svg'
import IconRecording from '/images/recording.svg'
import IconScript from '/images/script.svg'
import IconUpload from '/images/upload.svg'

const ICONS = {
  analytics: IconAnalytics,
  billing: IconBilling,
  calling: IconCalling,
  international: IconInternational,
  outcomes: IconOutcomes,
  payments: IconPayments,
  recording: IconRecording,
  script: IconScript,
  upload: IconUpload,
};

export const Icon = styled.img.attrs(({ name="payments" }) => ({
  src: name in ICONS ? ICONS[name] : name
}))`
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
`;

export default Icon;
