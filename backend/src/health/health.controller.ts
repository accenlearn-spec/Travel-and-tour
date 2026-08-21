import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheckResponse, HealthService } from './health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Check API and Database Health' })
  @ApiResponse({
    status: 200,
    description: 'System health status including database connectivity.',
  })
  async getHealth(): Promise<HealthCheckResponse> {
    return this.healthService.checkHealth();
  }
}
