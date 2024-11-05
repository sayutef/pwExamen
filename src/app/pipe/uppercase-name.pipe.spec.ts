import { UppercaseNamePipe } from './uppercase-name.pipe';

describe('UppercaseNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseNamePipe();
    expect(pipe).toBeTruthy();
  });
});
