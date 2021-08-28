import type { NextPage } from 'next'
import { Hello } from '../components/hello'
import { Progress, useProgressUpdater } from '../components/progress'

let count = 1;

const Home: NextPage = () => {
  console.log('Render Home');
  const UpdateProgress = useProgressUpdater();
  
  const click = () => {
    // TODO: page 側で count を管理しない
    count++;
    UpdateProgress(count);
  };

  return (
    <div>
      <Hello />
      <Progress bgColor={'red'} />
      <button type="button" onClick={click}>Count Up</button>
    </div>
  )
};

export default Home
