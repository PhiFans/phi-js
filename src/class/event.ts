import { IPhiChartEvent } from '../types/Chart/EventType';

/**
 * 标准的判定线事件类。
 */
export class PhiChartEvent implements IPhiChartEvent {
  /**
   * 时间开始时间，单位为毫秒。
   */
  readonly startTime: number;

  /**
   * 时间结束时间，单位为毫秒。
   */
  readonly endTime: number;

  /**
   * 事件开始时的值，注意由于 JavaScript 对小数的精度并不好，对于百分制的值推荐转换为 100 后再填入。
   */
  readonly start: number;

  /**
   * 事件结束时的值，注意由于 JavaScript 对小数的精度并不好，对于百分制的值推荐转换为 100 后再填入。
   */
  readonly end: number;

  /**
   * 创建一个判定线事件。
   * @param {PhiChartEvent} params 事件参数，详见本类的各项属性说明。
   */
  constructor({ startTime, endTime, start, end }: PhiChartEvent) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.start = start;
    this.end = end;
  }
}
