import React from 'react';
import { useChain, useSpring, animated, config, useSpringRef } from 'react-spring';

const WelcomeView = ({name}) => {
  
  const text1Ref=useSpringRef();
  const text2Ref=useSpringRef();
  const text3Ref=useSpringRef();
  
  const text1Style=useAnimation(text1Ref);
  const text2Style=useAnimation(text2Ref);
  const text3Style=useAnimation(text3Ref);
  
  useChain([text1Ref, text2Ref, text3Ref]);

  const { number } = useSpring({
    from: { number: 10 },
    number: 0,
    // delay: 600,
    delay: 5600,
    config: config.molasses,
  });

  return (
    <div className='welcomeView'>
        {/* <img src='../src/assets/boxed-water.jpg' /> */}
        <animated.h2 style={text1Style} className='welcomeView_title'>Hola {name}! Iniciarás un emocionante test</animated.h2>
        <animated.h2 style={text2Style} className='welcomeView_title'>Relájate y aprende algo nuevo e interesante</animated.h2>
        <animated.h2 style={text3Style} className='welcomeView_title'>Que el juego comienza en...</animated.h2>
        <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
    </div>
  );
};

const useAnimation=(ref)=>{
  const spring=useSpring({
    from: {
      opacity: 0,
      display: false,
    },
    to: {
      opacity: 1,
      display: true
    },
    ref: ref,
    delay: 800
  });
  return spring;
};

export default WelcomeView;