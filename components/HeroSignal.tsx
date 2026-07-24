export function HeroSignal() {
  return (
    <div className="hero-signal" aria-hidden="true">
      <div className="signal-orbit orbit-one" />
      <div className="signal-orbit orbit-two" />
      <div className="signal-core">
        <span>STORIES</span>
        <strong>ON AIR</strong>
        <small>MINJERRIBAH</small>
      </div>
      <div className="signal-screen screen-a">
        <span>01</span>
        <strong>FILM</strong>
      </div>
      <div className="signal-screen screen-b">
        <span>02</span>
        <strong>NEWS</strong>
      </div>
      <div className="signal-screen screen-c">
        <span>03</span>
        <strong>NOTICE</strong>
      </div>
      <div className="signal-screen screen-d">
        <span>04</span>
        <strong>LIVE</strong>
      </div>
      <div className="signal-beam beam-a" />
      <div className="signal-beam beam-b" />
    </div>
  );
}
