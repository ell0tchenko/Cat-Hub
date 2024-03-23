import React from 'react';
import s from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={s.footerWrap}>
    <div className={s.footerContainer}>
        <div className={s.aboutUs}>
            <p><b>About us:</b></p>
            <br></br>
            <p>The best social network ever, where even your granny</p>
            <p>will figure out how to post her meatball soup recipe.</p>
            <p>Click «Create Post» and join our community.</p>
        </div>
        <div className={s.rights}>
            <p>Used image were taken from Firewatch.</p>
            <br></br>
            <p>All rights reserved ©.</p>
        </div>
    </div>
</footer>
  );
};

export default Footer;