**NOTE** *This module does not work anymore, due to changes in browser's security framework (https connections needed) and changes in the Google API (which MM does not support easily).*




# MMM-chromecast
MagicMirror<sup>2</sup> Module to cast from server to chromecast. This module enables the chromcast to load the content directly from the server, i.e., it does not mirror the browser tab. 

## Dependencies
  * An installation of [MagicMirror2](https://github.com/MichMich/MagicMirror)
  * A browser supporting casting to chromecast (i.e. Google Chrome) to initially start the cast
  * A chromecast (or similar device supporting the Google Cast API v3)

## Installation
1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        module: "MMM-chromecast",
        position: "top_right",
    }
    ```

    Note: the position does not matter, the module does not show any content

## Config Options and Usage
There are no options required. 

To display the MagicMirror on a chromecast, just open the [MagicMirror server](https://github.com/MichMich/MagicMirror#server-only) in your Google Chrome browser (e.g. https://localhost:8080) and start casting. The chromecast will load the MagicMirror website. The casting only needs to be started once, the browser is not required afterwards. 

For further instructions on how to start casting see [Google's FAQ](https://support.google.com/chromecast/answer/3228332?hl=en&ref_topic=4602553). 

Important remarks:
 * Chromecast will use the same url as is currently open in your browser when starting to cast.
 * If you change your MagicMirror configuration or setup, you will have to stop casting and restart casting (no automatic refresh).

## Notes and References
The receiver and casting code is adapted from [url-cast-receiver](https://github.com/DeMille/url-cast-receiver).
