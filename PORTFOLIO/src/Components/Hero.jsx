const Hero = () => {
  return (
    <section className="hero">
      <img src="https://i.pinimg.com/736x/45/b6/dd/45b6dda6a99e8713c76cf3cd57636419.jpg" alt="My Profile" />
      <h2>Hello, I’m Atharv</h2>
      <p>A passionate Full-Stack Developer from India</p>
      <button className="cta" onClick={() => window.location.href = '#contact'}>
        Let's Talk
      </button>
    </section>
  );
};

export default Hero;
