import express from "express";

const app = express();
const port = 4000;
interface Dog {
  name: string;
  breed: "labrador" | "german shepherd" | "golden retriever";
  adopted_at: Date | null;
  birth_date: Date | null;
}

app.get<
  {},
  { data: Dog[]; message: string },
  {},
  {
    page: number;
    limit: number;
    breed: "labrador" | "german shepherd" | "golden retriever";
  }
>("/api/v1/dogs", (req, res) => {
  res.send({
    data: [
      { name: "rodi", breed: "labrador", adopted_at: null, birth_date: null },
    ],
    message: "All dogs",
  });
});

app.get<{ id: number }, { data: Dog | null; message: string }, {}>(
  "/api/v1/dogs/:id",
  (req, res) => {
    res.send({
      data: {
        name: "misa",
        breed: "german shepherd",
        adopted_at: null,
        birth_date: null,
      },
      message: "One Dog",
    });
  }
);
//                recibo                     // //envio = request//
app.post<{}, { data: Dog & { id: number }; message: string }, Dog, {}>(
  "/api/v1/dogs",
  (req, res) => {
    res.send({
      data: {
        id: 1,
        name: "misa",
        breed: "german shepherd",
        adopted_at: null,
        birth_date: null,
      },
      message: "One Dog",
    });
  }
);

app.put<
  { id: number },
  { data: Dog & { id: number }; message: string },
  Partial<Dog>,
  {}
>("/api/v1/dogs", (req, res) => {
  res.send({
    data: {
      id: 1,
      name: "misael",
      breed: "german shepherd",
      adopted_at: null,
      birth_date: null,
    },
    message: "perro actualizado",
  });
});

app.delete<
  { id: number },
  { data: Dog & { id: number }; message: string },
  {},
  {}
>("/api/v1/dogs", (req, res) => {
  res.send({
    data: {
      id: 1,
      name: "misael",
      breed: "german shepherd",
      adopted_at: null,
      birth_date: null,
    },
    message: "perro deleted",
  });
});

app.listen(port, () => {
  console.log(`API Dogs listening on port ${port}`);
});
