import { PhiChartNote } from './note';
import { PhiChartJudgeLine } from './judgeline';
import { IPhiChart } from '../types/Chart/ChartType';

export class PhiChart implements IPhiChart {
  /**
   * 该谱面的音频时间偏移，单位为毫秒。
   */
  readonly offset: number;

  /**
   * 该谱面拥有的所有 Note
   */
  readonly notes: Array<PhiChartNote>;

  /**
   * 该谱面拥有的所有判定线
   */
  readonly judgelines: Array<PhiChartJudgeLine>;

  constructor({ offset, notes, judgelines }: PhiChart) {
    this.offset = offset;
    this.notes = [...notes];
    this.judgelines = [...judgelines];
  }
}
