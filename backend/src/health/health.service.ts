import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

export interface HealthCheckResponse {
  status: string;
  database: 'connected' | 'disconnected';
  timestamp: string;
  uptime: number;
}

@Injectable()
export class HealthService {
  private readonly logger = new Logger(HealthService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  async checkHealth(): Promise<HealthCheckResponse> {
    let dbStatus: 'connected' | 'disconnected' = 'disconnected';

    try {
      // Query database via Supabase client to test actual connectivity
      const { error } = await this.supabaseService
        .getClient()
        .from('destinations')
        .select('id', { count: 'exact', head: true });

      if (!error) {
        dbStatus = 'connected';
      } else {
        this.logger.warn(
          `Database health check returned error: ${error.message}`,
        );
        // Even if destinations table isn't created yet or returned a postgrest error,
        // if code is 42P01 (relation does not exist) or similar schema issue, check if client contacted db
        if (error.code && error.code !== 'FETCH_ERROR') {
          dbStatus = 'connected';
        }
      }
    } catch (err) {
      this.logger.error(`Database health check failed: ${err.message}`);
      dbStatus = 'disconnected';
    }

    return {
      status: dbStatus === 'connected' ? 'ok' : 'degraded',
      database: dbStatus,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
