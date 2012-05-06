jquery-keywordegg
=================

An easter egg plugin.

## Example usage ##

    $(document).keywordegg({
    	"keyword": "foo ?bar",
    	"onMatch": function(matches) {
    		$("#foo").show();
    	}
    });


## Options ##
keyword: The phase to match. Regex patterns are allowed.
maxLength: The maximum length of the keyword log (default: 100)
onMatch: Function to call when a match is made.