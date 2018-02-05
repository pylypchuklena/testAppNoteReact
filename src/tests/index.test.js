import { appReduser} from './reducers/index';


describe('notes reducer', () => {
    it('should return the initial state', () => {
      expect(
        appReduser(undefined, {})
      ).toEqual([
        {
          notes: new [],
          comments: new[],
          storageType: 0
        }
      ])
    })
});