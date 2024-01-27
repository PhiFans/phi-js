import { PhiChartNote } from './note';
import { PhiChartEventLayer } from './eventlayer';
import { IPhiChartJudgeLine } from '../types/Chart/JudgeLineType';

export class PhiChartJudgeLine implements IPhiChartJudgeLine {
  /**
   * 该判定线下的 Note。
   */
  notes: Array<PhiChartNote>;

  /**
   * 该判定线所拥有的事件层
   */
  eventLayers: Array<PhiChartEventLayer>;

  constructor({ notes, eventLayers }: PhiChartJudgeLine) {
    this.notes = [...notes];
    this.eventLayers = [...eventLayers];
  }
}
