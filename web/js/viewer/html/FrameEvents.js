const {Elements} = require("../../util/Elements");
const {Preconditions} = require("../../Preconditions");

class FrameEvents {

    /**
     * Calculate the points of an mouseEvent in the current window relative to the
     * frame which originated the mouseEvent.
     *
     * @param iframe {HTMLIFrameElement}
     * @param mouseEvent {MouseEvent}
     */
    static calculatePoints(iframe, mouseEvent) {

        // FIXME: make sure the mouseEvent ACTUALLY happened in the iframe because
        // if it didn't then the calculations here won't make any sense.

        Preconditions.assertNotNull(iframe, "iframe");

        if(mouseEvent.target.ownerDocument !== iframe.contentDocument) {
            throw new Error("Event did not occur in specified iframe");
        }

        let result = {

            page: {
                x: undefined,
                y: undefined
            },
            client: {
                x: undefined,
                y: undefined
            }

        };

        // We need a frame of reference to translate the two coordinate systems.
        // using screenX and screenY solve this problem for us.  We can
        // translate the the screen position to the client (viewport) position,
        // and then based on the scrolling positions of the document translate
        // that into the page positions.
        //

        result.client.x = mouseEvent.screenX - window.screenX;
        result.client.y = mouseEvent.screenY - window.screenY;

        // FIXME: wer'e off by 26px because of the electron navbar

        result.page.x = result.client.x + window.scrollX;
        result.page.y = result.client.y + window.scrollY;

        return result;

    }

}

module.exports.FrameEvents = FrameEvents;
