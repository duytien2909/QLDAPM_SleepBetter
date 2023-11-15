import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: 'test-app-build',
  slug: 'test-app-build',
  version: config.version,
  icon: config.icon,
  extra: config.extra,
  android: config.android
});
