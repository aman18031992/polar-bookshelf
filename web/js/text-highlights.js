// code for dealing with text highlights

// given some text, compute a list of rects that can overlap the text to form
// one coherent highlight.
function computeRectsForContiguousHighlightRegion(rects) {

    let tuples = createSiblingTuples(rects);

    let result = [];

    tuples.forEach(function (tuple) {

        var adjusted = {
            left: tuple.curr.left,
            top: tuple.curr.top,
            right: tuple.curr.right,
            bottom: tuple.curr.bottom
        };

        if(tuple.next) {
            adjusted.bottom = tuple.next.top;
        }

        adjusted.width = adjusted.right - adjusted.left;
        adjusted.height = adjusted.bottom - adjusted.top;

        result.push(adjusted);

    })

    return result;

}

function createTextHighlightFromClassname(clazz) {



}

class TextHighlight {

    constructor(textHighlightStruct) {
        this.textHighlightStruct = textHighlightStruct;
    }

    static create(selector) {

        let textHighlightStruct = TextHighlightStruct.createFromSelector(selector);

        // go through each marker and render them.
        textHighlightStruct.markers.forEach(function (marker) {
            console.log("FIXME 0 rendering..")
            this.render(marker.element, marker.highlightRect);
        }.bind(this));

    }


    /**
     * Render a physical highlight on an element for the given rect
     *
     * @param highlightRect
     */
    static render(element, highlightRect) {

        var highlightElement = document.createElement("div");

        highlightElement.className = "text-highlight";
        highlightElement.style.position = "absolute";
        highlightElement.style.left = `${highlightRect.left}px`;
        highlightElement.style.top = `${highlightRect.top}px`;
        highlightElement.style.width = `${highlightRect.width}px`;
        highlightElement.style.height = `${highlightRect.height}px`;

        // FIXME: insert this into the page element.. to the parent div... there is a
        // get common parent method that I should probably use.

        element.parentElement.appendChild(highlightElement);

        // FIXME: now clear the selection once this is done.

        // FIXME: the highlight should/could be BELOW the text and probably should
        // be until it's deleted I think.

    }

}

/**
 * Raw structure to represent a text highlight on the page.
 */
class TextHighlightStruct {

    constructor(markers) {

        // the physical client rects to draw the highlight on the page.
        this.markers = markers;

    }

    /**
     * Create a highlight from a CSS selector.
     */
    static createFromSelector(selector) {

        let elements = Array.from(document.querySelectorAll(selector));

        if(! elements) {
            throw new Error("No elements");
        }

        var rects = elements.map(current => elementOffset(current));

        console.log("FIXME: rects", rects);

        let contiguousRects = computeRectsForContiguousHighlightRegion(rects);

        // create a mapping between the element and the rect
        let markers = [];

        for (let idx = 0; idx < elements.length; ++idx) {
            var element = elements[idx];
            markers.push( {
                element,
                highlightRect: contiguousRects[idx]
            });
        }

        return new TextHighlightStruct(markers);

    }

}

