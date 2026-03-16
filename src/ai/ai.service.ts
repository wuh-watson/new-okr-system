import { PrismaService } from '../prisma/prisma.service';

export class AIService {
    private prisma: PrismaService;

    constructor() {
        this.prisma = new PrismaService();
    }

    // Add your AI functionalities here, using the prisma instance
}