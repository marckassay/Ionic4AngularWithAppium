import { join } from 'path';

/**
 * Make sure version value is exact according to `AppiumGeneralCapabilities.platformVersion`
 *
 * @see AppiumGeneralCapabilities.platformVersion
 */
export const PLATFORM_VERSION = '9';
export const DEVICE_NAME = 'PL2GARH860103131';
export const APK_PATH = join(process.cwd(), './platforms/android/app/build/outputs/apk/debug/app-debug.apk');
export const LOG_PATH = join(process.cwd(), './temp');
