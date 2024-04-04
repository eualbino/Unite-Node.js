import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { generateSlug } from "../utils/generate-slug";
import { prisma } from "../lib/prisma";

export async function createEvent(app: FastifyInstance) {

app.withTypeProvider<ZodTypeProvider>().post(
  "/events",
  {
    schema: {
      body: z.object({
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().positive(),
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid(),
        }),
      },
    },
  },
  async (request, reply) => {
    const data = request.body;

    const slug = generateSlug(data.title);

    const eventWithSameSlug = await prisma.event.findUnique({
      where: {
        slug,
      },
    });

    if (eventWithSameSlug !== null) {
      throw new Error("Another event with same title already exists.");
    }

    const event = await prisma.event.create({
      data: {
        title: data.title,
        details: data.details,
        maximumAttendees: data.maximumAttendees,
        slug,
      },
    });

    return reply.status(201).send({ eventId: event.id });
  }
);
}