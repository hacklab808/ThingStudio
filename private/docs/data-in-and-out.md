---
title: 'Templates 3: Sending data to IoT devices from ThingStudio'
urlstring: 'getting-data-in-and-out'
summary: 'How to transfer data between ThingStudio and your devices.'
---

ThingStudio sends and receives all MQTT payloads as JSON objects.

The practical effect of this is that when you send data to ThingStudio, you will either call a JSON encode function first, or, in the case of simple value, enclose it in quotes to create a JSON string, which is the simplest kind of JSON object.

Similarly, all data that you receive on your device from ThingStudio will be a JSON object, so you will need to call a JSON parser to extract the object, or in the case of a simple value, just remove the enclosing quotes. All that is sounds considerably more complicated than it really is, but should be obvious in practice.

For example, for Arduino, you can use this JSON library. https://github.com/bblanchon/ArduinoJson

Here are several useful data publishing functions available to you in your templates:

<pre>
publishFeed = function(feedName, message) {
	feed = Feeds.findOne({title: feedName});
	publish(feed, message);
}
</pre>

<pre>
getFeed = function(feed, defVal){
	msg = Messages.findOne({
		feed: feed
	});
	return msg ? msg.payload : defaultValue;
}
</pre>

<pre>
paddedNumber = function(num, size) {
	var s = "000000000" + num;
	return s.substr(s.length-size);
}
</pre>

<pre>
mapValue = function(x, in_min, in_max, out_min, out_max) {
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
</pre>
