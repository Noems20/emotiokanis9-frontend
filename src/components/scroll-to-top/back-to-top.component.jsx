import React, { useState } from 'react';
import { Button } from './back-to-top.styles';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <Button
      onClick={scrollTop}
      style={{
        opacity: showScroll ? '1' : '0',
        visibility: showScroll ? 'visible' : 'hidden',
      }}
    >
      <HiChevronDoubleUp />
    </Button>
  );
};

export default BackToTop;
