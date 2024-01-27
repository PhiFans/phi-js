import { PhiChartEvent } from './event';
import { IPhiChartEventLayer } from '../types/Chart/EventLayerType';

/**
 * 创建一个事件层。当一条线拥有多个事件层时，判定线将会使用每个事件层叠加后的值。
 */
export class PhiChartEventLayer implements IPhiChartEventLayer {
  /**
   * 控制判定线在 x 轴上的移动
   */
  moveX: Array<PhiChartEvent>;

  /**
   * 控制判定先在 y 轴上的移动
   */
  moveY: Array<PhiChartEvent>;

  /**
   * 控制判定线的透明度
   */
  alpha: Array<PhiChartEvent>;

  /**
   * 控制判定线的旋转
   */
  rotate: Array<PhiChartEvent>;

  /**
   * 控制判定线的速度事件
   */
  speed: Array<PhiChartEvent>;

  constructor({ moveX, moveY, alpha, rotate, speed }: PhiChartEventLayer) {
    this.moveX = [...moveX];
    this.moveY = [...moveY];
    this.alpha = [...alpha];
    this.rotate = [...rotate];
    this.speed = [...speed];
  }
}
