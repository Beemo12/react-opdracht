import React from 'react';

export function AboutMe() {
  return (
    <section className="AboutMe">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZYaw3Fsjwhxu84aYtKiYOwHaFj%26pid%3DApi&f=1&ipt=256a516cdd649e39ff4bbcbcb9ccd8cbf5e4651f1b86724a58713de5a7923fcf"
        alt="Over mij"
      />
      <div>
        <h2 className="aboutMe__title">About Me</h2>
        <p className="aboutMe__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
}