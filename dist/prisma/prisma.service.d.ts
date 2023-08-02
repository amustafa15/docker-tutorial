import { OnApplicationShutdown } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { INestApplication } from '@nestjs/common';
export declare class PrismaService extends PrismaClient implements OnApplicationShutdown {
    constructor();
    onApplicationShutdown(signal?: string): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
