import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import './App.css'

function App() {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(true)
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    let interval: number = 0;
    if (isActive && isPaused === false)
      interval = setInterval(() => setTime((time) => time + 10), 10);
    else
      clearInterval(interval);

    return () => clearInterval(interval);

  }, [isActive, isPaused])

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <Container fluid className='main-container'>
      <h1>
        Stop Watch
      </h1>
      <div className='container rounded-full p-3 timer-main'>
        <div className="row text-center">
          <div className="col-sm-4">M</div>
          <div className="col-sm-4">S</div>
          <div className="col-sm-4">ms</div>
        </div>
        <div className="row text-center">
          <div className="col-sm-4 ">
            <h1 className='number'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</h1>
          </div>
          <div className=" col-sm-4 ">
            <h1 className='number'> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}</h1>
          </div>
          <div className="col-sm-4 ">
            <h1 className='number'> {("0" + ((time / 10) % 100)).slice(-2)}</h1>
          </div>
        </div>

      </div>
      <section>
        <Button variant="success" size='lg' onClick={handleStart}>Start</Button>{' '}
        <Button variant="success" size='lg' onClick={handlePauseResume}>Pause | Resume</Button>{' '}
        <Button variant="success" size='lg' onClick={handleReset}>Reset</Button>{' '}
      </section>
      <footer className='footer'>
        All Rights Reserved by StopWatch 2023
      </footer>
    </Container>
  )
}

export default App
