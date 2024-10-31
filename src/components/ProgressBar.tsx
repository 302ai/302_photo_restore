/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Progress } from 'antd';
import Locale from "../locales";

interface ProgressProps {
  finish: boolean,
  seconds: number,
}

export default function ProgressBar({ seconds, finish }: ProgressProps) {
  const [showProgress, setShowProgress] = useState(false)
  const [percent, setPercent] = useState(0)


  useEffect(() => {
    let timer: any = null

    const autoIncrement = (seconds: number) => {
      let currentValue = percent;
      let targetValue = 99;
      let startTime = new Date().getTime();
      let elapsedTime = 0;

      const updateValue = () => {
        const currentTime = new Date().getTime();
        elapsedTime = (currentTime - startTime) / 1000;

        if (elapsedTime >= seconds) {
          currentValue = targetValue;
          setPercent((preCount) => preCount > currentValue ? preCount : Math.floor(currentValue))
        } else {
          if (currentValue >= 90) {
            currentValue += Math.random() * 0.2;
          }
          else if (currentValue >= 50) {
            currentValue += Math.random() * 0.8;
          } else {
            currentValue += Math.random() * 3;
          }
          currentValue = Math.min(currentValue, targetValue);
          setPercent((preCount) => preCount > currentValue ? preCount : Math.floor(currentValue))
        }
        if (currentValue !== targetValue) {
          timer = setTimeout(updateValue, 1000);
        }
      };

      updateValue();
    }

    setTimeout(() => {
      setShowProgress(true)
      autoIncrement(seconds)
    }, 1000)
    // clear
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  useEffect(() => {
    if (finish) {
      setPercent(100)
    }
  }, [finish])

  return (
    <div id="Progress-bar" className="w-full flex items-center pt-1">
      {
        showProgress
          ? <Progress percent={percent} success={{ percent: percent, strokeColor: '#7728f5' }} status='normal' size={['default', 20]} />
          : <div className='w-full text-center text-sm text-slate-500'>{seconds > 120 ? '' : Locale.Action.Wait}</div>
      }
    </div>
  )
}
