// src/prisma/prisma.service.ts

// import { INestApplication, Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient {
//     async enableShutdownHooks(app: INestApplication) {
//         this.$on('beforeExit', async () => {
//             await app.close()
//         });
//     }
// }

import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { INestApplication } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnApplicationShutdown {
  constructor() {
    super();
  }

  async onApplicationShutdown(signal?: string) {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
  }
}