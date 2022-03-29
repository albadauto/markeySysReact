import { createConnection } from "typeorm";

createConnection().then((res) => console.log(`Conectado ao postgresql, banco: ${res.options.database}` ));