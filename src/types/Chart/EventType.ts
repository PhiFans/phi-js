export type IPhiChartEvent = {
  /**
   * 时间开始时间，单位为毫秒。
   */
  startTime: number;

  /**
   * 时间结束时间，单位为毫秒。
   */
  endTime: number;

  /**
   * 事件开始时的值，注意由于 JavaScript 对小数的精度并不好，对于百分制的值推荐转换为 100 后再填入。
   */
  start: number;

  /**
   * 事件结束时的值，注意由于 JavaScript 对小数的精度并不好，对于百分制的值推荐转换为 100 后再填入。
   */
  end: number;
};
