import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="error">
        <h1>Błąd 404. Nie znaleziono strony!</h1>
        <Link
          to="/"
          style={{
            backgroundColor: "#00b392",
            padding: 10,
            color: "#fff",
          }}
        >
          Powrót
        </Link>
      </section>
    </>
  );
};

export default Error;
