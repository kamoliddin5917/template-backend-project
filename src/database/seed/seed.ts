import { DataSource, createConnection } from 'typeorm';
import { config } from '../../common/config';

(async () => {
  const dataSource: DataSource = await createConnection({
    type: 'postgres',
    url: config.DB_URL,
    entities: [__dirname + '/../../modules/**/*.entity.{js,ts}'],
  });

  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {


    await queryRunner.commitTransaction();
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error;
  } finally {
    await queryRunner.release();
  }
})();
