jquery-keywordegg
=================

An easter egg plugin allowing you to perform an action When the user types a specific keyword phrase.
Typing inside form elemnts is ignored, so the `onMatch` action will not be executed when the user is completing a form.

## Example usage ##

    $(document).keywordegg({
    	"keyword": "foo ?bar", // matches "foobar" and "foo bar"
    	"onMatch": function(match) {
			// Perform your easter egg action
			// ...
    	}
    });


## Options ##
`keyword`

The keyword phase to match. The phrase can be more than one word and can use regex syntax.

`maxLength`

The maximum length of the keyword log.
This value needs to be at least the length of the keyword phrase. (default value: 100)

`onMatch`

A function to call when a match is made. The matching phrase will be passed as a parameter.