import { IPhiChartEvent } from './EventType';

export type IPhiChartEventLayer = {
  /**
   * 控制判定线在 x 轴上的移动
   */
  moveX: Array<IPhiChartEvent>;

  /**
   * 控制判定先在 y 轴上的移动
   */
  moveY: Array<IPhiChartEvent>;

  /**
   * 控制判定线的透明度
   */
  alpha: Array<IPhiChartEvent>;

  /**
   * 控制判定线的旋转
   */
  rotate: Array<IPhiChartEvent>;

  /**
   * 控制判定线的速度事件
   */
  speed: Array<IPhiChartEvent>;
};
