import { IPhiChartNote } from './NoteType';
import { IPhiChartEventLayer } from './EventLayerType';

export type IPhiChartJudgeLine = {
  /**
   * 该判定线下的 Note。
   */
  notes: Array<IPhiChartNote>;

  /**
   * 该判定线所拥有的事件层
   */
  eventLayers: Array<IPhiChartEventLayer>;
};
