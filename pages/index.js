function Home() {
  const containerStyle = {
    backgroundColor: "#222",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const emojiStyle = {
    fontSize: "3rem",
    color: "#ff9900",
  };

  const headingStyle = {
    fontSize: "2.5rem",
  };

  const leadStyle = {
    fontSize: "1.25rem",
    margin: "1rem 0",
  };

  const contactStyle = {
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div style={emojiStyle}>🚧</div>
      <h1 style={headingStyle}>Ocultab: Em Construção</h1>
      <p style={leadStyle}>
        Nosso site sobre ocultismo está sendo preparado para desvendar os
        mistérios em breve!
      </p>
      <p style={contactStyle}>
        Enquanto isso, você pode entrar em contato conosco através do email:
        contato@ocultab.com
      </p>
    </div>
  );
}

export default Home;
