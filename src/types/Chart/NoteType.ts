export type IPhiChartNote = {
  /**
   * Note 类别 `0` = Tap, `1` = Drag, `2` = Hold, `3` = Flick
   */
  type: number;

  /**
   * Note 被判定的绝对时间，单位为毫秒。
   */
  time: number;

  /**
   * 额外的 Note 流速。
   *
   * 如果 Note 类型为 `2` 且谱面格式为官方谱面则该参数用于控制 Note 的长度。
   */
  speed: number;

  /**
   * Note 是否处在判定线的上半边（假设判定线角度为 0°）
   */
  isAbove: boolean;

  /**
   * Hold 的时间长度，单位为毫秒。默认值为 `NaN`，仅对类型为 `2` 的 Note 生效。
   */
  holdTime: number;
};
