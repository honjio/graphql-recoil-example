import type { NextPage } from 'next'
import { Hello } from '../components/hello'
import { Progress, useProgressIncrementUpdater } from '../components/progress'

const Home: NextPage = () => {
  console.log('Render Home');
  const incrementProgress = useProgressIncrementUpdater();

  return (
    <div>
      <Hello />
      <Progress bgColor={'red'} />
      <button type="button" onClick={incrementProgress}>Count Up</button>
    </div>
  )
};

export default Home
