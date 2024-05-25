import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './index';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  url: config.DB_URL,
  entities: [__dirname + '/../../modules/**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
  synchronize: false,
};

const dataSource = new DataSource(typeOrmConfig);

export default dataSource;

// npm run migration:generate -- src/database/migrations/firstMigration
