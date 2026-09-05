export function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-background">
      <div className="site-background__mesh" />
      <div className="site-background__grid" />
      <div className="site-background__beam site-background__beam--one" />
      <div className="site-background__beam site-background__beam--two" />
      <div className="site-background__orb site-background__orb--one animate-float-soft" />
      <div className="site-background__orb site-background__orb--two animate-float-soft" />
      <div className="site-background__orb site-background__orb--three animate-float-soft" />
      <div className="site-background__ring site-background__ring--one animate-pulse-ring" />
      <div className="site-background__ring site-background__ring--two animate-pulse-ring" />
      <div className="site-background__dots site-background__dots--one" />
      <div className="site-background__dots site-background__dots--two" />
    </div>
  );
}
