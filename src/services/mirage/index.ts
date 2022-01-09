import { createServer, Model, Factory } from "miragejs";
import faker from "faker";

type User = {
    name: string;
    email: string;
    createdAt: string;
};

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}),
        },
        factories: {
            user: Factory.extend({
                name(index: number) {
                    // return `User ${index + 1}`;
                    return `${faker.name.firstName()} ${faker.name.lastName()}`;
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(15);
                },
            }),
        },
        seeds(server) {
            server.createList("user", 15);
        },
        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/users");
            this.post("/users");
            this.delete("/users");
            this.put("/users");

            this.namespace = "";
            this.passthrough();
        },
    });

    return server;
}
