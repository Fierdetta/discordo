import { findByDisplayName, findByProps } from "@vendetta/metro";
import { after } from "@vendetta/patcher";

const ChatBanner = findByDisplayName("ChatBanner", false);

// The Video component with types
const Video = findByProps("DRMType", "FilterType").default as typeof import("react-native-video").default;

let unpatch;

export default {
    onLoad: () => {
        unpatch = after("default", ChatBanner, (_, res) => {
            return (
                <>
                    {res}
                    <Video
                        source={{ uri: "https://discord.com/assets/ae7d16bb2eea76b9b9977db0fad66658.mp3" }}
                        audioOnly
                    />
                </>
            );
        });
    },
    onUnload: () => {
        unpatch();
    }
}