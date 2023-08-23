import React from "react";


function GalacticCrusade(){
    return( <div className="row GalacticCrusadeContainer bg-dark mt-5 container-fluid pt-5 pb-5 m-0">
    <div className="col-1 ps-3 pe-3"></div>
    <div className="col-sm-5">
      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/R-9KaQuCV4w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div className="col-5">

    <div className="col text-white">
        <h2 className="display-4">Galactic Crusade</h2>
        <p className="lead">
          In the new age after humanity became a multi planet spiecies and
          ventured beyond their solar system <br />
          they were met with hostility as they very quickly discovered they were
          not the only ones trying to <br />
          claim spaces wealth for thier own multiple wars wage across the galaxy
          and beyond for control off it <br />
          all as a crusader it is your job to ward of invaders and claim the
          galaxy for humanits sake
        </p>
      </div>

    </div>
    <div className="col-1 ps-3 pe-3"></div>
  </div>)
}

export default GalacticCrusade