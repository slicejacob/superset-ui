import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import dummyDatasource from '../../../../../shared/dummyDatasource';
import data from '../data';

export const basic = () => (
  <SuperChart
    chartType="dual-line"
    width={400}
    height={400}
    datasource={dummyDatasource}
    queryData={{ data }}
    formData={{
      colorScheme: 'd3Category10',
      vizType: 'dual_line',
      xAxisFormat: 'smart_date',
      yAxis2Format: '.3s',
      yAxisFormat: '.3s',
    }}
  />
);
