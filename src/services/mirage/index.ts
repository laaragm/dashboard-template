import { createServer, Model, Factory, Response } from "miragejs";
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
            server.createList("user", 200);
        },
        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/users", function (schema, request) {
                const { page = 1, quantityPerPage = 5 } = request.queryParams;
                const total = schema.all("user").length;
                const offsetStart = (+page - 1) * +quantityPerPage;
                const offsetEnd = offsetStart + +quantityPerPage;
                const users = this.serialize(schema.all("user")).users.slice(
                    offsetStart,
                    offsetEnd
                );

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { users }
                );
            });
            this.post("/users");
            this.delete("/users");
            this.put("/users");

            this.namespace = "";
            this.passthrough();
        },
    });

    return server;
}
