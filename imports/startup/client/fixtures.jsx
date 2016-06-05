import { Meteor } from 'meteor/meteor';

// send initial set of tweet images to client
Meteor.startup(() => {
    Meteor.makeAsync = function(fn, context) {
        return function( /* arguments */ ) {
            var self = context || this;
            var newArgs = _.toArray(arguments);
            var callback;

            for (var i = newArgs.length - 1; i >= 0; --i) {
                var arg = newArgs[i];
                var type = typeof arg;
                if (type !== "undefined") {
                    if (type === "function") {
                        callback = arg;
                    }
                    break;
                }
            }

            if (!callback) {
                var fut = new Future();
                callback = function(error, data) {
                    fut.return({ error: error, data: data });
                };

                ++i;
            }

            newArgs[i] = Meteor.bindEnvironment(callback);
            var result = fn.apply(self, newArgs);
            return fut ? fut.wait() : result;
        };
    };

});
