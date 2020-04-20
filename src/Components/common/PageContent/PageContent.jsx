import React from 'react';
import { Divider } from 'antd';
import PageTitle from '../../common/PageTitle';

import './pageContent.scss';

export default function PageContent({ children, ...props }) {
  const { title, titleDivider } = props;

  return (
    <div className="page-content">
      {title && <PageTitle title={title} />}
      {titleDivider && <Divider type="horizontal" />}
      {children}
    </div>
  );
}
