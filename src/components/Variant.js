import React, { useEffect, useState } from "react";

export const data = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

const Variant = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Aslam");
    }, 1000);
  }, []);

  return (
    <>
      {user ? <p>Selamat datang {user}</p> : null}
      <p>Hari-hari yang ada: </p>
      {data.map((hari, i) => {
        return (
          <p data-testid="hari" key={i}>
            {hari}
          </p>
        );
      })}
    </>
  );
};

export default Variant;