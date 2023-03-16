import { ReactNative } from "@vendetta/metro/common";

const { DCDSoundManager } = ReactNative.NativeModules
const DISCORDO_URL = "https://discord.com/assets/ae7d16bb2eea76b9b9977db0fad66658.mp3"
const SOUND_ID = 232

const prepareDiscordo = () => new Promise((resolve) => DCDSoundManager.prepare(DISCORDO_URL, "notification", SOUND_ID, resolve))

export default {
    onLoad: () => {
        prepareDiscordo().then(() => DCDSoundManager.play(SOUND_ID))
    }
}