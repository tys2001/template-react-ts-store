import { Provider } from '../scripts/Provider';
import Example1 from './Example1';
import Example2 from './Example2';

const Root: React.FC = () => {
  return (
    <Provider>
      <Example1 />
      <Example2 />
    </Provider>
  );
}

export default Root;