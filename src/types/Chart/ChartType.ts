import { IPhiChartNote } from './NoteType';
import { IPhiChartJudgeLine } from './JudgeLineType';

export type IPhiChart = {
  /**
   * 该谱面的音频时间偏移，单位为毫秒。
   */
  offset: number;

  /**
   * 该谱面拥有的所有 Note
   */
  notes: Array<IPhiChartNote>;

  /**
   * 该谱面拥有的所有判定线
   */
  judgelines: Array<IPhiChartJudgeLine>;
};
