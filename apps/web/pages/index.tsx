import Parcel from 'single-spa-react/parcel'
import { LifeCycles, mountRootParcel } from 'single-spa';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Parcel
          config={() => System.import<LifeCycles>('@mfe/mfe-1')}
          mountParcel={mountRootParcel}
        />
        <br />
        <Parcel
          config={() => System.import<LifeCycles>('@mfe/mfe-2')}
          mountParcel={mountRootParcel}
        />
    </div>
  );
}
