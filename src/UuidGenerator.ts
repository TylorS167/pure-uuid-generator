export class UuidGenerator {
  constructor(
    private timeLow: number,
    private timeMid: number,
    private timeHi: number,
    private clockSeqHi: number,
    private clockSeqLow: number,
    private node: number)
  { }

  public seeds(): [number, number, number, number, number, number] {
    return [
      this.timeLow,
      this.timeMid,
      this.timeHi,
      this.clockSeqHi,
      this.clockSeqLow,
      this.node,
    ]
  }
}
