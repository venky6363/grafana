import React from 'react';
import { LegendProps, Legend, LegendItem } from '../Legend/Legend';
import { GraphLegendItem } from './GraphLegendItem';
import { SeriesColorChangeHandler, SeriesAxisToggleHandler } from './GraphWithLegend';

interface GraphLegendProps extends LegendProps {
  onSeriesColorChange: SeriesColorChangeHandler;
  onSeriesAxisToggle?: SeriesAxisToggleHandler;
  onToggleSort?: (sortBy: string, sortDesc: boolean) => void;
  onLabelClick: (item: LegendItem) => void;
}

export const GraphLegend: React.FunctionComponent<GraphLegendProps> = ({
  items,
  renderLegendAs,
  statsToDisplay,
  onToggleSort,
  onSeriesAxisToggle,
  ...graphLegendItemProps
}) => {
  return (
    <Legend
      items={items}
      itemRenderer={item => (
        <GraphLegendItem
          item={item}
          onToggleAxis={() => {
            if (onSeriesAxisToggle) {
              onSeriesAxisToggle(item.label, !item.useRightYAxis);
            }
          }}
          {...graphLegendItemProps}
        />
      )}
      onToggleSort={onToggleSort}
      renderLegendAs={renderLegendAs}
      statsToDisplay={statsToDisplay}
    />
  );
};
