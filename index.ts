import os from 'os';
import { DockerComposeEnvironment, Wait } from 'testcontainers';

try {
  await new DockerComposeEnvironment('__test-data__', 'docker-compose.yml')
    .withEnvironment({ MYUID: os.userInfo().uid.toString() })
    .withWaitStrategy('synapse_1', Wait.forHealthCheck())
    .up();

  console.log('All containers started correctly');
} catch (e) {
  console.error('Error on starting containers', e);
}
