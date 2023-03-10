import React from 'react';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      <div className="introduction english">
        <p className="title">
          Hi!
          <br />
          This is
          <br />
          <strong>{name}</strong>
          .<br />
        </p>
        <div className="social-links">
          <IconButtonBar links={social} />
        </div>
      </div>
      <div className="thumbnail-wrapper">
        <Image style={{ width: 250, height: 250 }} src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Bio;
