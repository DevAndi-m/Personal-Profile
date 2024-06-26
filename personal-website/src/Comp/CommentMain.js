import React from 'react';
import CommentEntry from './CommentEntry.js';
import CommentData from './CommentData.js';
import CommentAdd from './CommentAdd.js';
import FinalisingSection from './FinalisingSection.js';
import './Comp-css/Comment.css';
import useReveal from './MyHooks/useReveal.js';

function CommentHeader() {

  useReveal('.headerText', 'headerTextVisible');
  useReveal('.headerTextMobile' , 'headerTextMobileVisible');

  return (
    <div className='cHeaderParent'>
      <h1 className='headerTextMobile'>Let's take a look at what others think</h1>
      <div className='cHolder'>
        <h1 className='headerText'>Let's take a look at what others think</h1>
        {/* Ktu hin commentet */}
        <CommentEntry />
        <CommentEntry />
        <CommentEntry />
        <CommentEntry />
      </div>
      <div className='cData'>
        {/* info tbazuara nkomente for userat me i pa */}
        <div className='cDataHolder'>
          <CommentData />
          <CommentAdd />
        </div>
        <p className='andiText'>Andi guarantees that only 2 comments are made by him, this unfortunately includes the comment by Elon Musk.</p>
      </div>
      <FinalisingSection />
    </div>
  )
}

export default CommentHeader
