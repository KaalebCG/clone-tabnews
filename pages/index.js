function Home() {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "#222", color: "#fff", minHeight: "100vh" }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12">
            <div className="display-1" style={{ color: "#ff9900" }}>
              🚧
            </div>
            <h1 className="display-4">OcultaB: Em Construção</h1>
            <p className="lead">
              Nosso site sobre ocultismo está sendo preparado para desvendar os
              mistérios em breve!
            </p>
            <p>
              Enquanto isso, você pode entrar em contato conosco através do
              email: contato@ocultab.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
