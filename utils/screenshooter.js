import fileSystem from "file-system";

const testFailedScreenshotDir = "result/failed/";

class ScreenUtils {

    static saveScreenshotAfterFail(screenFile, fileName) {
        fileSystem.writeFileSync(`${testFailedScreenshotDir}${Date.now()}_${fileName}.png`, screenFile, "base64")
    }

}

export { ScreenUtils };