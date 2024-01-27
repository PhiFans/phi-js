import { IPhiChartNote } from '../types/Chart/NoteType';

/**
 * 标准的 Note 类
 */
export class PhiChartNote implements IPhiChartNote {
  /**
   * Note 类别 `0` = Tap, `1` = Drag, `2` = Hold, `3` = Flick
   */
  readonly type: number;

  /**
   * Note 被判定的绝对时间，单位为毫秒。
   */
  readonly time: number;

  /**
   * 额外的 Note 流速。
   *
   * 如果 Note 类型为 `2` 且谱面格式为官方谱面则该参数用于控制 Note 的长度。
   */
  readonly speed: number;

  /**
   * Note 是否处在判定线的上半边（假设判定线角度为 0°）
   */
  readonly isAbove: boolean;

  /**
   * Hold 的时间长度，单位为毫秒。默认值为 `NaN`，仅对类型为 `2` 的 Note 生效。
   */
  readonly holdTime: number;

  /**
   * Hold 的结束时间，单位为毫秒。默认值为 `NaN`，仅对类型为 `2` 的 Note 生效。
   *
   * 此值由程序自动计算。
   */
  readonly holdEndTime: number;

  constructor({ type, time, speed, isAbove, holdTime }: IPhiChartNote) {
    this.type = type;
    this.time = time;
    this.speed = speed;
    this.isAbove = isAbove;

    this.holdTime = this.type === 2 ? holdTime : NaN;
    this.holdEndTime = this.type === 2 ? this.time + this.holdTime : NaN;
  }
}
