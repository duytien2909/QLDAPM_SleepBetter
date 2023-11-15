import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: 'SleepBetter',
  slug: 'SleepBetter',
  version: config.version,
  icon: config.icon,
  extra: config.extra,
  android: config.android
});
