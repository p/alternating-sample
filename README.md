# alternating-sample

Provides a utility function to randomly select a value from a list of values,
guaranteeing that consecutive retrievals return distinct values.

An example use case is selecting a background image from a pool of images,
rendering a different image on every visit.

localStorage is used for persistence.

## Usage

    var alternatingSample = require('alternating-sample')(window)
    var bgImage = alternatingSample('background', ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'])

## License

Released under the MIT license.
